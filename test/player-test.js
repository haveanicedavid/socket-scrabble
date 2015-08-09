var assert = require('chai').assert;
var Player = require('../lib/player');
var Board  = require('../lib/board.js');
// var _      = require('lodash');

describe('Player', function() {

  it('can place tiles', function () {
    var board = new Board();
    var bob = new Player(board);
    bob.placeTile(0,0);
    assert(board.hasTile(0,0));
  });


  it('can draw letters, always resulting in 7 letters for the player', function () {
    var bob = new Player();
    assert.equal(bob.currentLetters.length, 0);

    bob.drawLetters();
    assert.equal(bob.currentLetters.length, 7);

  });

});
