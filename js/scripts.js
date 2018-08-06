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

function bmi (weight, height) {
  return weight/(height*height);
};
// alert(bmi(77, 1.778));

var weight = parseFloat(prompt("enter weight"));
var height = parseFloat(prompt("enter height"));

alert(bmi(weight, height));
