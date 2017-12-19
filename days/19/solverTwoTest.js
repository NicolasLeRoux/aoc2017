const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 19: A Series of Tubes (Part two),', function() {
	/**
	 * Example n°01: Simple diagram
	 */
	describe('Example n°01,', function() {
		it('should return 38 for the given input.', function() {
			var matrix = [
				[' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
				[' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '+', '-', '-', '+', ' ', ' ', ' ', ' '],
				[' ', ' ', ' ', ' ', ' ', 'A', ' ', ' ', '|', ' ', ' ', 'C', ' ', ' ', ' ', ' '],
				[' ', 'F', '-', '-', '-', '|', '-', '-', '-', '-', 'E', '|', '-', '-', '+', ' '],
				[' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', 'D', ' '],
				[' ', ' ', ' ', ' ', ' ', '+', 'B', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ']
			];

			expect(solve(matrix)).to.equal(38);
		});
	});
});



