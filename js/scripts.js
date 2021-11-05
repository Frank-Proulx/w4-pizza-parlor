function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.costCalculator = function() {
  if (this.size === "small") {
    this.cost += 12;
  } else if (this.size === "medium") {
    this.cost += 15;
  } else {
    this.cost += 18;
  }
  this.cost += (this.toppings.length * 2);
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    let toppings = [];
    toppings = $("input[name='toppings']:checked").map(function() {
      return $(this).val();
    }).toArray();
    console.log(typeof toppings);
    let newPizza = new Pizza();


  });
}); 