var assert = require('chai').assert;
var Game = require('../lib/game');
// var _      = require('lodash');

describe('The game runner', function() {

  it('Can say if a word is valid', function () {
    var g = new Game();
    assert.equal(g.isValidWord("test"), true); 
    // assert.equal(g.isValidWord("asd;fkasjdf"), false); 
  });

  it('Can say if a word is not valid', function () {
    var g = new Game();
    assert.equal(g.isValidWord("asdfa"), false); 
    // assert.equal(g.isValidWord("asd;fkasjdf"), false); 
  });

  it('Can score a word', function () {
    var g = new Game();
    assert.equal (g.scoreWord("a"), 1);
    assert.equal (g.scoreWord("test"), 13);
  });

});
