// buisness logic

function Pizza(siz,sau,top){
this.toppings = top;
this.size = siz;
this.sauce = sau;
this.cost = 0;
}

Pizza.prototype.howMuch = function(){
  console.log(this.size,this.toppings);
  this.cost = this.size*1.25;
  this.cost += this.toppings.length;
  console.log(this.cost);
  return this.cost;
}

// Ui logic
let pizza;
function handleBuyPizza(event){
  event.preventDefault();
  const size = document.querySelector("input[name='size']:checked").value;
  const sauce = document.querySelector("input[name='sauce']:checked").value;
  const toppings = document.querySelectorAll("#topping[type='checkbox']:checked");
  console.log(size,sauce,toppings)
  //pizza = new Pizza();
}
window.addEventListener("load", function(){
  document.querySelector("#buyNow").addEventListener("click", handleBuyPizza);
})