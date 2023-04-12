Describe Pizza()
<!-- 
4 size
4 sauce
10 toppings -->

code: "it should return a pizza object with toppings and size
Tests: const pizza = new Pizza("small","alfredoSauce",[1,0,0,0,1,1,1,0,0,1]);
Output: pizza {size: "small",sauce: "alfredoSauce", toppings:[1,0,0,0,1,1,1,0,0,1]}


Describe Pizza.prototype.howMuch()

code: "it will use a formula to get the cost of the pizza"
tests:  const pizza = new Pizza(["cheese","extra cheese"],1);
        pizza.howMuch();
Output: 3.25

Describe Pizza.prototype.addName();

code: "it will add a name to the pizza constructor"
test:   const pizza = new Pizza("small","alfredoSauce",[1,0,0,0,1,1,1,0,0,1]);
        pizza.addName("joe);