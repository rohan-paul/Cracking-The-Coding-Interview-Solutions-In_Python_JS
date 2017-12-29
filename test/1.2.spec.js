var chai = require('chai');
var expect = require('chai').expect;
var isPermutation = require('../solutions/1.2-if-two-strings-are-permutations.js');

describe('1.2', function() {
  it('should check permutations', function() {
    expect(isPermutation('asdf', 'fdsa')).to.be.true;
    expect(isPermutation('asdf', 'fdsaa')).to.be.false;
    expect(isPermutation('asdf', 'fdsf')).to.be.false;
  });
});
