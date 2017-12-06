const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 5: A Maze of Twisty Trampolines, All Alike (Part two),', function() {
	/**
	 * Example n°01: In this example, the exit is reached in 5 steps.
	 */
	describe('Example n°01,', function() {
		it('should return 10 for the given input.', function() {
			var array = [
				'0',
				'3',
				'0',
				'1',
				'-3'
			];

			expect(solve(array)).to.equal(10);
		});
	});
});
