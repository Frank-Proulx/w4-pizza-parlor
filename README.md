# Pizza Parlor

#### By Frank Proulx

#### A website for ordering pizzas from Mewsy's Pizza Parlor

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

A Website where you can add pizzas by size and with toppings, getting a running tally with display of the pizzas you've ordered. You can click remove to delete them from your cart, and then checkout.

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* Initialize a git repository by typing **git init** in the terminal.
* Type **git clone https://github.com/Frank-Proulx/w4-pizza-parlor** to clone the repository to your local machine.
* Open the file "index.html" in the newly created "portfolio-landing" folder using either the GUI in your finder window, or typing **cd w4-pizza-parlore** and pressing return to navigate into the project folder, and then typing **open index.html** in the terminal from within the **w4-pizza-parlor** folder.  

## Link to [GitHub Pages](https://frank-proulx.github.io/w4-pizza-parlor/)

## Known Bugs

No known bugs  

## License

[MIT](https://opensource.org/licenses/MIT)

If you have any issues, questions, ideas or concerns, please reach out to me at my email and/or make a contribution to the code via GitHub.

Copyright (c) 2021 Frank Proulx

### Tests

Describe Pizza()

Test: "It should return a Pizza object with three properties, size, toppings, and cost (a method)"  
Code:  
const myPizza = new Pizza("large", ["bacon", "jalapenos", "pineapple"]);  
Expected Ouput: Pizza {size: "large", toppings: ["bacon", "jalapenos", "pineapple"], cost: this.cost()}  

Describe Pizza.prototype.costCalculator()  

Test: "It should take the length of the array containing the toppings in the toppings property of the pizza object, and the size value, and add cost depending on the number of elements and size chosen"  
Code:  
const myPizza = new Pizza("large", ["bacon", "jalapenos", "pineapple"]);  
myPizza.costCalculator();  
myPizza.cost;  
Expected Output: 24  

Describe Checkout()

Test: "It should return a Checkout object with three properties, pizzas (an empty object), pizzaCount (assigned a value of 0 at creation), and totalCost (assigned a value of 0 at creation)
Code:
let checkout = new Checkout();
Expected Output: Checkout { pizzas: {}, pizzaCount: 0, totalCost: 0}

Describe Checkout.prototype.addPizza()

Test: "It should increment the total number of pizzas ordered by 1, and it should add each new pizza to the pizzas object in checkout, with a property equal to the number of the order in which it was created. It should add the cost of each pizza to checkout.totalCost as a running tally"  
Code:  
let checkout = new Checkout();  
const myPizza = new Pizza("large", ["bacon", "jalapenos", "pineapple"]);  
checkout.addPizza(myPizza);  
Expected Output: Checkout { pizzas: {1: size: "large", toppings: ["bacon", "jalapenos", "pineapple"], cost: 24}, pizzaCount: 1, totalCost: 24 }

Describe Checkout.prototype.deletePizza()

Test: "It should delete a pizza from the checkout object and also decrease the checkout object's totalCost by the cost of the deleted pizza"
Code:
let checkout = new Checkout();  
const myPizza = new Pizza("Large", ["bacon", "jalapenos", "pineapple"]);  
const myPizza2 = new Pizza("Medium", ["tomato", "bacon"]);
checkout.addPizza(myPizza);  
checkout.addPizza(myPizza2);  
checkout.deletePizza(myPizza2);
Expected Output: Checkout { pizzas: {1: size: "large", toppings: ["bacon", "jalapenos", "pineapple"], cost: 24}, pizzaCount: 1, totalCost: 24 }