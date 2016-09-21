// ##Water Bottle Lab Extension
// Create an athlete object.

// 1. Athlete should have a hydration attribute that starts at 100.
// 2. Athlete should have a distance covered attribute starts at 0.
// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
// 4. Athlete should not move when running dehydrated: hydration at 0;
// 5. Athlete should be able to increase hydration by drinking from water bottle

var waterBottle = require('./water_bottle');

var athlete = {
  hydration: 100,
  distanceCovered: 0,
  run: function() {
    if(this.hydration <= 0) {
    this.hydration -= 10;
    this.hydration += 10;
    this.distanceCovered += 10;
    this.distanceCovered -= 10
  } else {
    this.hydration -= 10;
    this.distanceCovered += 10
  }
  },
  drink: function() {
    this.hydration += 10;
    waterBottle.drink;
  }

}

module.exports = athlete;