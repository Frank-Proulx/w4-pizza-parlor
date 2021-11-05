function Checkout() {
  this.pizzas = {};
  this.pizzaCount = 0;
  this.totalCost = 0;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.cost = this.costCalculator();
}

Pizza.prototype.costCalculator = function() {
  let cost = 0;
  if (this.size === "small") {
    cost = 12;
  } else if (this.size === "medium") {
    cost = 15;
  } else {
    cost = 18;
  }
  cost += (this.toppings.length * 2);
  return cost;
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    let toppings = [];
    toppings = $("input[name='toppings']:checked").map(function() {
      return $(this).val();
    }).toArray();
    let newPizza = new Pizza(size, toppings);
    const costMessage = "Thanks for ordering! You're pizza will be $";
    $("#cost").text(costMessage + newPizza.cost);

  });
}); 