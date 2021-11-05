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
    let newPizza = new Pizza(size, toppings);
    newPizza.costCalculator();
    const costMessage = "Thanks for ordering! You're pizza will be $";
    $("#cost").text(costMessage + newPizza.cost);
    
  });
}); 