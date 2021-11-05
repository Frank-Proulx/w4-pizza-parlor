function Checkout() {
  this.pizzas = {};
  this.pizzaCount = 0;
  this.totalCost = 0;
}

Checkout.prototype.addPizza = function(pizza) {
  this.pizzaCount += 1;
  this.pizzas[this.pizzaCount] = pizza;
  this.totalCost += pizza.cost;
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
  let checkout = new Checkout();
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    let toppings = [];
    toppings = $("input[name='toppings']:checked").map(function() {
      return $(this).val();
    }).toArray();
    let newPizza = new Pizza(size, toppings);
    checkout.addPizza(newPizza);
    const costMessage = "Thanks for ordering! You're pizza will be $";
    $("#cost").text(costMessage + newPizza.cost);

  });
}); 