function Player (board) {
  this.activeBoard = board; 
}

// Should the responsibility of placing a letter be with player or board for scale?
Player.prototype.placeTile = function (xPos, yPos) {
  // Only place letter if they're the active player
  return this.activeBoard.placeTile(xPos, yPos, this);
};

module.exports = Player;