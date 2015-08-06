// var $ = require('jquery');

var validWords = require("an-array-of-english-words");
// var validWords = $.getJSON("../node_modules/an-array-of-english-words/words.json");
// var wordsArr = JSON.parse(validWords);

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

module.exports = Game;