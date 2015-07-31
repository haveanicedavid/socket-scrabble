var Tile = require('./tile');

function Board () {
  this.rows = 15;    // Board is 15 x 15, staring point 7
  this.cols = 15;    // Starting point based on a 0, 0 at top-left would be (7, 7);
  this.placedPieces = {};

  // this.activePlayers = [];

  this.pieces = {
    " ": {score: 0, count: 2}, // Better way to represent blank tile?
    "E": {score: 1, count: 12},
    "A": {score: 1, count: 9},
    "I": {score: 1, count: 9},
    "O": {score: 1, count: 8},
    "N": {score: 1, count: 6},
    "R": {score: 1, count: 6},
    "T": {score: 1, count: 6},
    "L": {score: 1, count: 4},
    "S": {score: 1, count: 4},
    "U": {score: 1, count: 4},

    "D": {score: 2, count: 4},
    "G": {score: 2, count: 3},

    "B": {score: 3, count: 2},
    "C": {score: 3, count: 2},
    "M": {score: 3, count: 2},
    "P": {score: 3, count: 2},

    "F": {score: 4, count: 2},
    "H": {score: 4, count: 2},
    "V": {score: 4, count: 2},
    "W": {score: 4, count: 2},
    "Y": {score: 4, count: 2},

    "K": {score: 5, count: 1},

    "J": {score: 8, count: 1},
    "X": {score: 8, count: 1},

    "Q": {score: 10, count: 1},
    "Z": {score: 10, count: 1},
  };
}

Board.prototype.placePiece = function (xPos, yPos, player) {

    !this.placedPieces[xPos] ? this.placedPieces[xPos] = new Tile(xPos, yPos, player) : null ;
    // player.activeBoard = this;
};


module.exports = Board;