const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 8: I Heard You Like Registers (Part two),', function() {
	/**
	 * Example n°01: In this example, the exit is 10.
	 */
	describe('Example n°01,', function() {
		it('should return 10 for the given input.', function() {
			var array = [
				'b inc 5 if a > 1',
				'a inc 1 if b < 5',
				'c dec -10 if a >= 1',
				'c inc -20 if c == 10'
			];

			expect(solve(array)).to.equal(10);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 5 for the given input.', function() {
			var array = [
				'b inc 5 if a <= 1',
				'a inc 1 if b < 5',
				'c dec -10 if a >= 6',
				'c inc -20 if c == 10'
			];

			expect(solve(array)).to.equal(5);
		});
	});
});
