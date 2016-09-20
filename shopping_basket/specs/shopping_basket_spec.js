var basket = require('../shopping_basket');
var assert = require('assert');

describe("Shopping Basket", function(){
  it("value should be 0", function(){
    assert.equal(0, basket.value)
  })
  it("milk costs 2 cashmoneys", function(){
     basket.addMilk();
    assert.equal(2, basket.value)
  })
  it("milk is added to basket", function(){
    assert.deepEqual(["milk"], basket.contents)
  })
  it("can empty basket", function() {
    basket.empty();
    assert.deepEqual([], basket.contents)
  })
  it("emptying basket returns value to 0", function() {
    assert.equal(0, basket.contents)
  })
  it("bread costs 1 cashmoney", function(){
    basket.addBread();
    assert.equal(1, basket.value)
  })
  it("bread is added to basket", function(){
    assert.deepEqual([ "bread" ], basket.contents)
  })
  it("eggs costs 1 cashmoney", function(){
    basket.addEggs();
    assert.equal(4, basket.value)
  })
  it("eggs are added to basket", function(){
    assert.deepEqual([ "bread", "eggs" ], basket.contents)
  })
  it("Dunfermline Press costs 1 cashmoney", function(){
    basket.empty();
    basket.addDunfermlinePress();
    assert.equal(1, basket.value)
  })
  it("Dunfermline Press is added to basket", function(){
    assert.deepEqual([ "Dunfermline Press" ], basket.contents)
  })
  it("can get discounted total", function(){
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.getTotal();
    assert.equal(19.8, basket.value)
  })
  it("can get discount with card", function(){
    basket.empty();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addEggs();
    basket.addMilk();
    basket.getTotal();
    basket.discountCard();
    assert.equal(17.10, basket.value.toFixed(2))
  })
})
