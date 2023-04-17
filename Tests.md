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
        pizza.addName("joeWahbeh");
output: "joeWahbeh"

code: "will display 'invalid name' if the addName is less then 4 characters long"
test:   const pizza = new Pizza("small","alfredoSauce",[1,0,0,0,1,1,1,0,0,1]);
        pizza.addName("joe");
output: "invalid name"

code: "will add 100$ to price if size is not selected on a pizza"
test:   const pizza = new Pizza("ha not an actual size","alfredoSauce",[1,0,0,0,1,1,1,0,0,1]);
        pizza.howMuch();
output: 103.25

code:   "will add 5$ to price if 'extraLarge' is selected"
test:   const pizza = new Pizza("extraLarge","alfredoSauce",[0,0,0,0,0,0,0,0,0,0]);
        pizza.howMuch();
output: 5.75