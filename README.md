# Pizza Parlor

#### By Frank Proulx

#### _{Brief description of application}_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Create and/or navigate to the directory you would like to contain this project on your computer.
* Initialize a git repository by typing **git init** in the terminal.
* Type **git clone https://github.com/Frank-Proulx/w4-pizza-parlor** to clone the repository to your local machine.
* Open the file "index.html" in the newly created "portfolio-landing" folder using either the GUI in your finder window, or typing **cd w4-pizza-parlore** and pressing return to navigate into the project folder, and then typing **open index.html** in the terminal from within the **w4-pizza-parlor** folder.  

## Link to [GitHub Pages](https://frank-proulx.github.io/w4-pizza-parlor/)

## Known Bugs

* _Any known issues_
* _should go here_

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
onst myPizza = new Pizza("large", ["bacon", "jalapenos", "pineapple"]);  
myPizza.costCalculator();  
myPizza.cost;  
Expected Output: 24  

Describe Checkout()

Test: "It should return a Checkout object with three properties, pizzas (an empty object), pizzaCount (assigned a value of 0 at creation), and totalCost (assigned a value of 0 at creation)
Code:
let checkout = new Checkout();
Expected Output: Checkout { pizzas: {}, pizzaCount: 0, totalCost: 0}

