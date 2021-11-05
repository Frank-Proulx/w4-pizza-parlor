function Checkout() {
  this.pizzas = {};
  this.pizzaCount = 0;
  this.totalCost = 0;
}

Checkout.prototype.addPizza = function(pizza) {
  this.pizzaCount += 1;
  this.pizzas[this.pizzaCount] = pizza;
  this.totalCost += pizza.cost;
};

Checkout.prototype.deletePizza = function(pizzaCount) {
  this.totalCost -= this.pizzas[pizzaCount].cost;
  delete this.pizzas[pizzaCount];
};

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
    $("input[name='toppings']:checked").prop('checked', false);
    $("#size").prop('selectedIndex', 0);
    $("#itemized").empty();
    const costMessage = "Thanks for ordering! Your total will be $";
    $("#cost").text(costMessage + checkout.totalCost);
    console.log(checkout);
    Object.keys(checkout.pizzas).forEach(function(key) {
      $("#itemized").append("<p>" + checkout.pizzas[key].size + " pizza - " + checkout.pizzas[key].toppings.join(", ") + "<span id=" + key + " class='pizzas'> - remove</span></p>");
    });
  });
  $("#itemized").on("click", ".pizzas", function() {
    checkout.deletePizza(this.id);
    $("#itemized").empty();
    Object.keys(checkout.pizzas).forEach(function(key) {
      $("#itemized").append("<p>" + checkout.pizzas[key].size + " pizza - " + checkout.pizzas[key].toppings.join(", ") + "<span id=" + key + " class='pizzas'> - remove</span></p>");
    });
    $("#cost").empty();
    const costMessage = "Thanks for ordering! Your total will be $";
    $("#cost").text(costMessage + checkout.totalCost);
  });
  console.log(checkout);
  

}); 