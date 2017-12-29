var chai = require('chai');
var expect = require('chai').expect;
var isUniqueChars = require('../solutions/1.1-check-string-for-uniqueness.js');

describe('1.1', function() {
  it('should check for uniqueness', function() {
    expect(isUniqueChars('asdfgh')).to.be.true;
    expect(isUniqueChars('Javascript')).to.be.false;
    expect(isUniqueChars('script')).to.be.true;
    expect(isUniqueChars('asdfghqwer')).to.be.true;
    expect(isUniqueChars('asdfghjskjkj')).to.be.false;
  });
});
