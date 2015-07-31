var assert = require('chai').assert;
var Player = require('../lib/player');
var Board = require('../lib/board.js');
var _      = require('lodash');

describe('Player', function() {
  
  it('exists', function () {
    assert(new Player());
  });

  it('Players can place pieces starting in the middle of the board', function () {
    var board = new Board();
    var bob   = new Player(board); 
    bob.placeLetter(7,7);

    assert.equal(_.keys(board.placedPieces).length, 1);
  });

  it('The first placed piece must be in the middle of the board', function () {
    var board = new Board();
    var bob = new Player(board);
    bob.placeLetter(6,6);
    // bob.placeLetter(7,7);

    assert.equal(_.keys(board.placedPieces).length, 0);
    
  });

});