var bottle = require('../water_bottle');
var assert = require('assert');

describe("Water Bottle", function(){
  it("should be empty", function(){
    assert.equal(0, bottle.volume)
  })
  it("should go to 100 when filled", function(){
    bottle.fill();
    assert.equal(100, bottle.volume)
  })
  it("should subtract 10 when drank", function(){
    bottle.fill();
    bottle.drink();
    assert.equal(90, bottle.volume)
  })
  it("should go to 0 when emptied", function(){
    bottle.empty();
    assert.equal(0, bottle.volume)
  })
  it("should not be able to go below 0", function(){
    bottle.drink();
    assert.equal(0, bottle.volume)
  })
})