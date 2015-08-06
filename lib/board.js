var Tile = require('./tile');
var _    = require('lodash');

function Board () {
  this.placedTiles = [];
}

Board.prototype.hasTile = function (xPos, yPos) {
  return _.any(this.placedTiles, function(tile) {
    return tile.xPos === xPos && tile.yPos === yPos;
  });
};

Board.prototype.centerTilePlaced = function () {
  if (this.hasTile(0,0)) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.tileHasNeighbors = function (xPos, yPos) {
  if (this.hasTile(xPos + 1, yPos) || this.hasTile(xPos - 1, yPos) || this.hasTile(xPos, yPos + 1) || this.hasTile(xPos, yPos - 1)) {
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
  } 
  
  if (this.tileHasNeighbors(xPos, yPos)) {
    return true;
  }
  return false;
};

Board.prototype.placeTile = function (xPos, yPos, player) {
  if (this.canPlaceTile(xPos, yPos)) {
    this.placedTiles.push(new Tile(xPos, yPos, player));
  }
};


module.exports = Board;
