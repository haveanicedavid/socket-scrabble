var assert = require('chai').assert;
var Game = require('../lib/game');
var _      = require('lodash');

describe('The game runner', function() {
  
  it('Should exist', function () {
    assert(new Game());
  });
  
});