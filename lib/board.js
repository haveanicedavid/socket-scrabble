var Tile = require('./tile');
var _    = require('lodash');

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


// Board.prototype.hasTile = function (xPos, yPos) {
//   if (this.placedTiles[xPos] && this.placedTiles[xPos][yPos]) {
//     return true;
//   }
//   return false;
// };

Board.prototype.hasTile = function (xPos, yPos) {
  return _.any(this.placedTiles, function(tile) {
    return tile.xPos === xPos && tile.yPos === yPos;
  });
};

Board.prototype.centerTilePlaced = function () {
  if (this.hasTile(7,7)) {
    return true;
  } else {
    return false;
  }
  // if (this.placedTiles[7] && this.placedTiles[7][7]) {
  //   return true;
  // }
  // return false;
};

Board.prototype.tileHasNeighbors = function (xPos, yPos) {
  if (this.hasTile(xPos + 1, yPos) || this.hasTile(xPos - 1, yPos) || this.hasTile(xPos, yPos + 1) || this.hasTile(xPos, yPos - 1)) {
    return true;
  } else {
    return false;
  }
  // if (this.placedTiles[xPos] || this.placedTiles[xPos + 1] || this.placedTiles[xPos - 1]) {
  //     if (this.placedTiles[xPos][yPos] || this.placedTiles[xPos][yPos + 1] || this.placedTiles[xPos][yPos - 1]) {
  //         return true;
  //     }
  // }
  // return false;
};

Board.prototype.canPlaceTile = function (xPos, yPos) {
  if (!this.centerTilePlaced()) {
    if (xPos === 7 && yPos === 7) {
      return true;
    }
  } else if (this.tileHasNeighbors(xPos, yPos)) {
    return true;
  }
  return false;
};

// Board.prototype.placeTile = function (xPos, yPos, player) {
//   if (this.canPlaceTile(xPos, yPos)) {
//     if (!this.placedTiles[xPos]) {
//       this.placedTiles[xPos] = {};
//       this.placeTile(xPos, yPos, player); // No need for recursion?
//       // this.placedTiles[xPos][yPos] = new Tile(player);
//     } else {
//       this.placedTiles[xPos][yPos] = new Tile(player);
//     }
//   }
//   // }
// };

Board.prototype.placeTile = function (xPos, yPos, player) {
  if (this.canPlaceTile(xPos, yPos)) {
    this.placedTiles.push(new Tile(xPos, yPos, player));
  }
};


module.exports = Board;
