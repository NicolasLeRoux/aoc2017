const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 6: Memory Reallocation (Part two),', function() {
	/**
	 * Example n°01: In this example, the exit is 4.
	 */
	describe('Example n°01,', function() {
		it('should return 4 for the given input.', function() {
			var array = [
				'0',
				'2',
				'7',
				'0'
			];

			expect(solve(array)).to.equal(4);
		});
	});
});

