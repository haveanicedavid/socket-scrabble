var assert = require('chai').assert;
var Board = require('../lib/board.js');
var _      = require('lodash');

describe('The Board', function() {

  it('Should exist', function () {
    assert(new Board());
  });

  it('A single board should be 15 X 15', function () {
    var b = new Board();
    assert.equal(b.rows, 15); 
    assert.equal(b.cols, 15); 
  });

  it('letter tiles have different score', function () {
    var b = new Board();
    assert.equal(b.pieces["E"].score, 1);
    assert.equal(b.pieces["Z"].score, 10);
  });

  it('has 100 letter tiles', function () {
    var b = new Board();
    var pieceCount = _.reduce(b.pieces, function(sum, piece) {
      return sum + piece.count;
    }, 0);

    assert.equal(pieceCount, 100);

  });

});