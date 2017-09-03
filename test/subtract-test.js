const { assert: { exists, isFunction, isFinite } } = require('chai');

const subtract = require("../js/subtract.js");

describe("subtract", () => {

	describe("subtract exists", () => {
		it("should exist", () => {
			exists(subtract);
		});
	});

	describe("subtract should be a function", () => {
		it("should be a function", () => {
			isFunction(subtract);
		});
	});

	describe("subtract should return a number", () => {
		it ("should return a number", () => {
			isFinite(subtract(4, 5));
		});
	});

});