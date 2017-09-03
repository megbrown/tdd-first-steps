const { assert: { exists, isFunction, isFinite } } = require('chai');

const divide = require("../js/divide.js");

describe("divide", () => {

	describe("divide exists", () => {
		it("should exist", () => {
			exists(divide);
		});
	});

	describe("divide should be a function", () => {
		it("should be a function", () => {
			isFunction(divide);
		});
	});

	describe("divide should return a number", () => {
		it ("should return a number", () => {
			isFinite(divide(4, 5));
		});
	});

});