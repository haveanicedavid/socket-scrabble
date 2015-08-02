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

    board.placeTile(7,7, bob);

    assert(board.hasTile(7,7));
    // debugger;
    // assert.equal(_.size(board.placedTiles).length, 1);
  });

  it('The first placed piece must be in the middle of the board', function () {
    var board = new Board();
    var bob   = new Player(board);

    board.placeTile(6,6, bob);
    assert(!board.hasTile(6,6));

    // board.placeTile(7,7, bob);
    // board.placeTile(6,6, bob);

    // assert(board.hasTile(7,7));
    // assert(board.hasTile(6,6));
  });

  xit('can only place tiles next to other tiles', function () {
    var board = new Board();
    var bob   = new Player(board);

    bob.placeTile(7,7);
    bob.placeTile(2,2);

    assert(!board.hasTile(7,7));
    // assert(!board.hasTile(2,2));

  });

});
