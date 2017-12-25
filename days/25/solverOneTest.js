const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 25: The Halting Problem (Part one),', function() {
	/**
	 * Example n°01: With the following blueprint.
	 */
	describe('Example n°01,', function() {
		it('should return 3 for the given input.', function() {
			var array = [
				'Begin in state A.\nPerform a diagnostic checksum after 6 steps.',
				'In state A:\n  If the current value is 0:\n    - Write the value 1.\n    - Move one slot to the right.\n    - Continue with state B.\n  If the current value is 1:\n    - Write the value 0.\n    - Move one slot to the left.\n    - Continue with state B.',
				'In state B:\n  If the current value is 0:\n    - Write the value 1.\n    - Move one slot to the left.\n    - Continue with state A.\n  If the current value is 1:\n    - Write the value 1.\n    - Move one slot to the right.\n    - Continue with state A.'
			];

			expect(solve(array)).to.equal(3);
		});
	});
});
