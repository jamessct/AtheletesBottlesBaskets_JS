// ##Water Bottle Lab Extension
// Create an athlete object.

// 1. Athlete should have a hydration attribute that starts at 100.
// 2. Athlete should have a distance covered attribute starts at 0.
// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
// 4. Athlete should not move when running dehydrated: hydration at 0;
// 5. Athlete should be able to increase hydration by drinking from water bottle

var athlete = require('./athlete')

var waterBottle = {
  volume: 0,
  fill: function() {
    this.volume = 100
  },
  drink: function() {
    if (this.volume >= 10) {
      this.volume -=10;
    }
    else {
      this.empty(); 
    }
  },
  empty: function() {
    this.volume = 0
  }

}

module.exports = waterBottle;