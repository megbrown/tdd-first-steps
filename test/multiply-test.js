const { assert: { exists, isFunction, isFinite } } = require('chai');

const multiply = require("../js/multiply.js");

describe("multiply", () => {

	describe("multiply exists", () => {
		it("should exist", () => {
			exists(multiply);
		});
	});

	describe("multiply should be a function", () => {
		it("should be a function", () => {
			isFunction(multiply);
		});
	});

	describe("multiply should return a number", () => {
		it ("should return a number", () => {
			isFinite(multiply(4, 5));
		});
	});

});