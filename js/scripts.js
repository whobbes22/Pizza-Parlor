// buisness logic

function Pizza(siz,sau,top){
this.toppings = top;
this.size = siz;
this.sauce = sau;
this.cost = 5;
}

Pizza.prototype.howMuch = function(){
  console.log(this.size,this.toppings);
  this.cost = this.size*1.25;
  this.cost += this.toppings.length;
  console.log(this.cost);
  return this.cost;
}

// Ui logic
let pizza; // global variable

function handleBuyPizza(event){
  event.preventDefault();
  
  const size = document.querySelector("input[name='size']:checked").value;
  const sauce = document.querySelector("input[name='sauce']:checked").value;
  let combinedTopping =[]
  combinedTopping = combineToppings();
  pizza = new Pizza(size,sauce,combinedTopping)
  displayPizza(pizza);
  console.log(pizza)

}

function displayPizza(thePizza){
  document.querySelector("#balance").innerText = thePizza.howMuch();
}

function combineToppings(){
  const combinedTopping = [];
  combinedTopping.push(document.querySelector("input[name='extraCheese']:checked").value);
  combinedTopping.push(document.querySelector("input[name='pepperoni']:checked").value);
  combinedTopping.push(document.querySelector("input[name='sausage']:checked").value);
  combinedTopping.push(document.querySelector("input[name='bacon']:checked").value);
  combinedTopping.push(document.querySelector("input[name='chicken']:checked").value);
  combinedTopping.push(document.querySelector("input[name='onions']:checked").value);
  combinedTopping.push(document.querySelector("input[name='bellPeppers']:checked").value);
  combinedTopping.push(document.querySelector("input[name='blackOlives']:checked").value);
  combinedTopping.push(document.querySelector("input[name='mushrooms']:checked").value);
  combinedTopping.push( document.querySelector("input[name='tomatoBasil']:checked").value);

  return combinedTopping;
}


window.addEventListener("load", function(){
  document.querySelector("#buyNow").addEventListener("click", handleBuyPizza);
})