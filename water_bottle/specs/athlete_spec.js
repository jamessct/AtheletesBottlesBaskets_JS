var athlete = require('../athlete')
var assert = require('assert');

describe("Athlete", function(){
  it("athlete is fully hydrated", function(){
    assert.equal(100, athlete.hydration)
  })
  it("athelete can run", function() {
    athlete.run();
    assert.equal(90, athlete.hydration);
    assert.equal(10, athlete.distanceCovered)
  })
  it("athlete can drink", function() {
    athlete.drink();
    assert.equal(100, athlete.hydration)
  })
})