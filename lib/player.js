var letterBag = require('./letter-bag');
var _         = require('lodash');

function Player (board) {
  this.activeBoard    = board; 
  this.score          = undefined;
  this.currentLetters = [];
}

// Player.prototype.placeTile = function (xPos, yPos) {
//   // Only place letter if they're the active player
//   return this.activeBoard.placeTile(xPos, yPos, this);
// };

Player.prototype.drawLetters = function () {
  while (this.currentLetters.length < 7) {
    this.currentLetters.push(_.sample(letterBag));
  }
};



module.exports = Player;