const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 8: I Heard You Like Registers (Part one),', function() {
	/**
	 * Example n°01: In this example, the exit is 1.
	 */
	describe('Example n°01,', function() {
		it('should return 1 for the given input.', function() {
			var array = [
				'b inc 5 if a > 1',
				'a inc 1 if b < 5',
				'c dec -10 if a >= 1',
				'c inc -20 if c == 10'
			];

			expect(solve(array)).to.equal(1);
		});
	});
});

