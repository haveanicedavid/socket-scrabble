var Tile = require('./tile');
// var _    = require('lodash');

function Board () {
  this.placedTiles = [];
}

Board.prototype.hasTile = function (xPos, yPos) {
  if (this.placedTiles[xPos] && this.placedTiles[xPos][yPos]) {
    return true;
  }
  return false;
};


Board.prototype.centerTilePlaced = function () {
  if (this.hasTile(0,0)) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.tileHasNeighbors = function (xPos, yPos) {
  if (this.hasTile(xPos + 1, yPos) ||
      this.hasTile(xPos - 1, yPos) ||
      this.hasTile(xPos, yPos + 1) ||
      this.hasTile(xPos, yPos - 1)) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.canPlaceTile = function (xPos, yPos) {
  if (!this.centerTilePlaced()) {
    if (xPos === 0 && yPos === 0) {
      return true;
    }
  } else if (!this.hasTile(xPos, yPos) && this.tileHasNeighbors(xPos, yPos)) {
    return true;
  }
  return false;
};

Board.prototype.placeTile = function (xPos, yPos, player) {
  if (this.canPlaceTile(xPos, yPos)) {
    if (this.placedTiles[xPos]) {
      this.placedTiles[xPos][yPos] = new Tile(xPos, yPos, player); 
    } else {
      this.placedTiles[xPos] = {};
      this.placedTiles[xPos][yPos] = new Tile(xPos, yPos, player); 
    }
  }
};


module.exports = Board;
