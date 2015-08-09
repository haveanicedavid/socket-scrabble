var validWords = require("an-array-of-english-words");
var letters    = require('./letter-bag.js');
var _          = require('lodash');
var canvas = require('./canvas.js');

function Game () {
  canvas();
}


Game.prototype.isValidWord = function (word) {
  // var wordsArr = JSON.parse(validWords);
  // return wordsArr.indexOf(word) > -1;
  return validWords.indexOf(word) > -1;
};

Game.prototype.scoreWord = function (word) {
  
  var letterScores = word.toUpperCase().split("").map(function(letter) {
    return letters[letter].score;
  });

  return _.reduce(letterScores, function(sum, wordScore) {
    return sum + wordScore;
  });
};

module.exports = Game;