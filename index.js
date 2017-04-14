var num1;
var num2;
var res;
var result;

document.addEventListener("DOMContentLoaded", function(){
	//takes HTML elements and places them in JS variables
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("result");

});

function add(num1, num2){
	//+num.value passes the variable as an integer instead of the string that it is by default
	result = +num1.value + +num2.value;
	res.value = result;
	
}
function subtract(num1, num2){
	result = +num1.value - +num2.value;
	res.value = result;
}
function multiply(num1, num2){
	result = +num1.value * +num2.value;
	res.value = result;
}
function divide(num1, num2){
	result = +num1.value / +num2.value;
	res.value = result;
}
