var Tile = require('./tile');

function Player (board) {
  this.activeBoard = board; 
}

Player.prototype.placeLetter = function (xPos, yPos) {
  this.activeBoard.placePiece(xPos, yPos, this);
  // this.activeBoard.placedPieces.push( new Tile(xPos, yPos, this) );
};

module.exports = Player;