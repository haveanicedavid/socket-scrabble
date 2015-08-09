var validWords = require("an-array-of-english-words");
var letters    = require('./letter-bag.js');
var _          = require('lodash');

function Game () {
// Will have: 
  // Boards
  // Players
  // Logic to score words

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