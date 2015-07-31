var Tile = require('./tile');

function Board () {
  this.rows = 15;    // Board is 15 x 15, staring point 7
  this.cols = 15;    // Starting point based on a 0, 0 at top-left would be (7, 7);
  this.placedTiles = [];
  // this.placedTiles = {};
  // this.activePlayers = [];
  // this.currentPlayer = undefined;

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


Board.prototype.centerPiecePlaced = function () {
    if (this.placedTiles[7] && this.placedTiles[7][7]) {
        return true;
    } else {
        return false;
    }
};

Board.prototype.canPlaceTile = function (xPos, yPos) {
    if (!this.centerPiecePlaced()) {
        if (xPos === 7 && yPos === 7) {
            return true;
        }
        return false;
    }
    // var tiles = this.placdTiles;

    // if (tiles[7] && tiles[7][7]) {
    //     if (tiles[xPos] && tiles[xPos][yPos]) {
    //         return false;
    //     }
    // }



       // var pieces = this.placedTiles;
    // if (pieces.xPos) {
    //     if (!pieces.xPos.yPos) {
    //         return true;
    //     }
    // }

  //   if (xPos === 7 && yPos === 7){
  //     return true;
  //   } else {
  //     if (this.placedTiles[xPos][yPos]) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // };
  //
  return true;
};

  Board.prototype.placePiece = function (xPos, yPos, player) {
    if (this.canPlaceTile (xPos, yPos)) {
      this.placedPieces[xPos] = {yPos: new Tile(player)};
    }
  };


  module.exports = Board;
