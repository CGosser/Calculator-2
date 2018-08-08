var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
var number1 = parseInt($("#add1").val());
var number2 = parseInt($("#add2").val());
var result = add(number1, number2);
$("#output").text(result);
  });
});

// function bmi (weight, height) {
//   return weight/(height*height);
// };
//
// var weight = parseFloat(prompt("enter weight"));
// var height = parseFloat(prompt("enter height"));
//
// alert(bmi(weight, height));

// var bmi = function(weight, height) {
//   return weight/(height*height);
// };
//
// var weight = parseFloat(prompt("Enter weight in Kilos"));
// var height = parseFloat(prompt("enter height in Meters"));
// alert(bmi(weight,height));
//
// var userInput()

// function tempConv (Celcius) {
//   return Celcius *(9/5) + 32
// };
//
// var Celcius = parseFloat(prompt("enter Temperature in Celcius"));
//
// alert(tempConv(Celcius));
