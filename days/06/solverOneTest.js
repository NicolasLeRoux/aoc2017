const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 6: Memory Reallocation (Part one),', function() {
	/**
	 * Example n°01: In this example, the exit is 5.
	 */
	describe('Example n°01,', function() {
		it('should return 5 for the given input.', function() {
			var array = [
				'0',
				'2',
				'7',
				'0'
			];

			expect(solve(array)).to.equal(5);
		});
	});
});
