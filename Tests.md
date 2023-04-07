Describe Pizza()

code: "it should return a pizza object with toppings and size
Tests: const pizza = new Pizza(["cheese","extra cheese"],"small");
Output: pizza {toppings: ["cheese","extra cheese"], size: "small}


Describe Pizza.prototype.howMuch()

code: "it will use a formula to get the cost of the pizza"
tests:  const pizza = new Pizza(["cheese","extra cheese"],1);
        pizza.howMuch();
Output: 3.25

