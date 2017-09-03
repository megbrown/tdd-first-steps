const { assert: { isFunction, exists } } = require('chai');

const add = require("../js/add.js");

describe("add", () => {

	describe("add exists", () => {
		it("should exist", () => {
			exists(add);
		});
	});

	describe("add should be a function", () => {
		it("should be a function", () => {
			isFunction(add);
		});
	});

	describe("add should return a number", () => {
		it ("should return a number", () => {
			isFinite(add(4, 5));
		});
	});

});