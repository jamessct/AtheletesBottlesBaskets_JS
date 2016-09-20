var shoppingBasket = {
  value: 0,
  contents: [],
  addMilk: function() {
    this.value += 2;
    this.contents.push("milk")
  },
  
  addBread: function() {
    this.value += 1;
    this.contents.push("bread")
  },
  addEggs: function() {
    this.value += 3;
    this.contents.push("eggs")
  },
  addDunfermlinePress: function() {
    this.value += 1;
    this.contents.push("Dunfermline Press")
  },
  empty: function() {
    this.value = 0;
    this.contents = []
  },
  getTotal: function() {
    if (this.value >= 20) {
      this.value = this.value - (this.value / 10);
    } else 
    this.value
  },
  discountCard: function() {
    this.value = this.value * 0.95;
  }
}

module.exports = shoppingBasket;