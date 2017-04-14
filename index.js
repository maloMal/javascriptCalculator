var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("result");
	console.log(num1);
	console.log(num2);
	console.log(res);
});

function add(num1, num2){
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