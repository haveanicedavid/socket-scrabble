function Tile (xPos, yPos, player) {
  // this.letter = letter;
  this.xPos   = xPos;
  this.yPos   = yPos;
  this.player = player;
  this.locked = false;
}

module.exports = Tile;