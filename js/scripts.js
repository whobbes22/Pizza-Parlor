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
