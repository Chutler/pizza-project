// Business Logic In the Back

function Pizza(size, sauce, cheese, meat, veggie) {
  this.size = size;
  this.sauce = sauce; 
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.price = function() {
  var pieSize = this.size;
  var pieCheese = this.cheese.length;
  var pieMeat = this.meat.length;
  var pieVeggie = this.veggie.length;
  debugger;
  if (pieSize === "Ten") {
    return 10 + (pieCheese*2) + (pieMeat*3) + (pieVeggie*2);
  } else if (pieSize === "Fourteen") {
    return 14 + (pieCheese*2) + (pieMeat*3) + (pieVeggie*2);
  } else {
    return 18 + (pieCheese*2) + (pieMeat*3) + (pieVeggie*2);
  }
}  

// I initially tried to set up the logic in the protoype with statements like: 
// return 10 + (this.cheese.length*2) + (this.Meat.length*3) + (this.veggie.length*2);
// I couldn't make it work so I had to set variables to those values. 
// I still don't know why this.cheese.length wouldn't work as opposed to settting that value to a variable

// AND I assume it's bad form to use a capitolized variable for size but 
// I wanted my final output in mixed (title) case without having to use a function  



// User Interface for Pizza Party In the Front 

$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();
    
    var orderSize = $('#size').val();
    var orderSauce = $('#sauce').val();
    var orderCheese = [];
    var orderMeat = [];
    var orderVeggie = [];
    console.log(orderSize, orderSauce, orderCheese, orderMeat, orderVeggie);
  
    $("input:checkbox[name=cheese]:checked").each(function () {
      orderCheese.push($(this).val());
    });
    $("input:checkbox[name=meat]:checked").each(function () {
      orderMeat.push($(this).val());
    });
    $("input:checkbox[name=veggie]:checked").each(function () {
      orderVeggie.push($(this).val());
    });

    var newOrder = new Pizza(orderSize, orderSauce, orderCheese, orderMeat, orderVeggie);
    var orderPrice = newOrder.price().toFixed(2);
  
    $('.price').text(orderPrice);
    $('.size').text(newOrder.size);
    $('.sauce').text(newOrder.sauce);
    $('.cheese').text(newOrder.cheese);
    $('.meat').text(newOrder.meat);
    $('.veggie').text(newOrder.veggie);

    $('#receipt').show();
  
  });
});
