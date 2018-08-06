// var add = function(number1, number2) {
// 	return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
// var result = multiply(number1, number2);
// alert(result);

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

function tempConv (Celcius) {
  return Celcius *(9/5) + 32
};

var Celcius = parseFloat(prompt("enter Temperature in Celcius"));

alert(tempConv(Celcius));
