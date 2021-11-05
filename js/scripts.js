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
  if (this.size === "Small") {
    cost = 12;
  } else if (this.size === "Medium") {
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
    console.log(checkout);
    $("input[name='toppings']:checked").prop('checked', false);
    $("#size").prop('selectedIndex', 0);
    console.log(checkout.pizzas[1].size);
    $("#itemized").empty();
    for (let i = 1; i <= checkout.pizzaCount; i++) {
      $("#itemized").append("<p>" + checkout.pizzas[i].size + " pizza - " + checkout.pizzas[i].toppings.join(", ") + "<span id=" + i + "> - remove</span></p>");
    }
    const costMessage = "Thanks for ordering! Your total will be $";
    $("#cost").text(costMessage + checkout.totalCost);


  });
}); 