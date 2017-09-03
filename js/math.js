"use strict";

process.title = "Calulator";

const { argv: [,, ...args] } = process;

const[num1, num2, action] = args;

const add = require("../js/add");
const subtract = require("../js/subtract");
const multiply = require("../js/multiply");
const divide = require("../js/divide");

let result = 0;

if (action === "add") {
	result = add(num1, num2);
} else if (action === "subtract") {
	result = subtract(num1, num2);
} else if (action === "multiply") {
	result = multiply(num1, num2);
} else {
	result = divide(num1, num2);
}

console.log(result);