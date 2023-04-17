// buisness logic

function Pizza(siz,sau,top){
this.toppings = top;
this.size = siz;
this.sauce = sau;
this.cost = 5;
}

Pizza.prototype.addName = function(name){
  this.pizzaName = name;
  if(name.length <5){
    return "invalid name";
  } else {
    return name;
  }
}

Pizza.prototype.howMuch = function(){
  this.cost = 0;
  switch(this.size){
    case ("extraLarge"):
      this.cost += 5;
      break;
    case ("large"):
      this.cost += 3;
      break;  
    case ("medium"):
      this.cost += 2;
      break;
    case("small"):
      this.cost += 1;
      break;
    default:
      this.cost = 100;
  } 
  switch(this.sauce){
    case("alfredoSauce"):
    case("ranchSauce"):
    this.cost += .75;
    break;
    case("marinaraSauce"):
    this.cost +=.25;
  }
  let toppingCost = 0;
  this.toppings.forEach(function(key){
    console.log("key ",parseInt(key) === 1);
    if(parseInt(key) === 1){
      //console.log(this) // gives url??  can not do "this.cost" in loop?
      toppingCost += .5;
    }
  });
  this.cost += toppingCost;
  return this.cost;
}

// Ui logic

function handleBuyPizza(event){
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  const sauce = document.querySelector("input[name='sauce']:checked").value;
  let combinedTopping =[]
  combinedTopping = combineToppings();
  let pizza = new Pizza(size,sauce,combinedTopping)
  displayPizza(pizza);
}

function displayPizza(thePizza){
  document.querySelector("#balance").innerText = "$"+ thePizza.howMuch();
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