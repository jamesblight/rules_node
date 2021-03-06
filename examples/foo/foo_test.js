var assert = require('assert');
var bar = require('examples-bar');
var _ = require('underscore');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('bar', function() {
  describe('#value', function() {
    it('should return a function', function() {
      assert.equal("function", typeof(bar));
      //assert.ok(baz.indexOf("baz") != -1);
    });
    it('should resolve to string', function() {
      assert.equal("string", typeof(bar()));
      //assert.ok(baz.indexOf("baz") != -1);
    });
    it('should resolve to module name', function() {
      assert.ok(bar().match(/.*[bB]ar.*/));
    });
  });
});
