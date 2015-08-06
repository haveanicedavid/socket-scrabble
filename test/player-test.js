var assert = require('chai').assert;
var Player = require('../lib/player');
var Board  = require('../lib/board.js');
// var _      = require('lodash');

describe('Player', function() {

  it('exists', function () {
    assert(new Player());
  });


  it('can draw letters, always resulting in 7 letters for the player', function () {
    var bob = new Player();
    assert.equal(bob.currentLetters.length, 0);

    bob.drawLetters();
    assert.equal(bob.currentLetters.length, 7);

  });

});
