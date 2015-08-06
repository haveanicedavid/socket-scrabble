var assert = require('chai').assert;
var Player = require('../lib/player');
var Board  = require('../lib/board.js');
// var _      = require('lodash');

describe('Player', function() {

  it('exists', function () {
    assert(new Player());
  });

  it('Players can place pieces starting in the middle of the board', function () {
    var board = new Board();
    var bob   = new Player(board);

    board.placeTile(0,0, bob);

    assert(board.hasTile(0,0));
    // debugger;
    // assert.equal(_.size(board.placedTiles).length, 1);
  });

  it('The first placed piece must be in the middle of the board', function () {
    var board = new Board();
    var bob   = new Player(board);

    board.placeTile(6,6, bob);
    assert(!board.hasTile(6,6));

    board.placeTile(0,0, bob);
    board.placeTile(1,0, bob);

    assert(board.hasTile(0,0));
    assert(board.hasTile(1,0));
  });

  it('can only place tiles next to other tiles', function () {
    var board = new Board();
    var bob   = new Player(board);

    board.placeTile(0,0, bob);
    board.placeTile(2,2, bob);
    
    assert(!board.hasTile(2,2));

    assert(board.hasTile(0,0));
    board.placeTile(1,0, bob);
    assert(board.hasTile(1,0));
  });

  it('can draw letters, always resulting in 7 letters for the player', function () {
    var bob = new Player();
    assert.equal(bob.currentLetters.length, 0);

    bob.drawLetters();
    assert.equal(bob.currentLetters.length, 7);

  });

});
