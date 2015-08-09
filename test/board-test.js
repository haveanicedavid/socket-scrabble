var assert = require('chai').assert;
var Board  = require('../lib/board.js');
var Player = require('../lib/player.js');
var _      = require('lodash');

describe('The Board', function() {

  // it('A single board should be 15 X 15', function () {
  //   var b = new Board();
  //   assert.equal(b.rows, 15);
  //   assert.equal(b.cols, 15);
  // });

  // it('letter tiles have different score', function () {
  //   var b = new Board();
  //   assert.equal(b.pieces["E"].score, 1);
  //   assert.equal(b.pieces["Z"].score, 10);
  // });

  // it('has 100 letter tiles', function () {
  //   var b = new Board();
  //   var pieceCount = _.reduce(b.pieces, function(sum, piece) {
  //     return sum + piece.count;
  //   }, 0);

  //   assert.equal(pieceCount, 100);
  // });

  it('can place pieces', function () {
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

  it('cannot place two tiles in the same spot', function () {
    var board = new Board();
    var bob   = new Player(board);
    var joe   = new Player(board);

    bob.placeTile(0,0);
    bob.placeTile(0,1);
    assert.equal(board.placedTiles[0][1].player, bob);

    joe.placeTile(0,1);
    assert.equal(board.placedTiles[0][1].player, bob);
    assert.notEqual(board.placedTiles[0][1].player, joe);
  });

  it('can find tiles', function () {
    var b   = new Board();
    var bob = new Player(b);
    // bob.placeTile(7,7);
    b.placeTile(0,0, bob);
    assert(b.hasTile(0,0));
  });

});
