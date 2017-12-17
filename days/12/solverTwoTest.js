const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 12: Digital Plumber (Part two),', function() {
	/**
	 * Example n°01: For the following list
	 * 0 <-> 2
	 * 1 <-> 1
	 * 2 <-> 0, 3, 4
	 * 3 <-> 2, 4
	 * 4 <-> 2, 3, 6
	 * 5 <-> 6
	 * 6 <-> 4, 5
	 * In the example above, there were 2 groups: one consisting of programs
	 * ``0,2,3,4,5,6``, and the other consisting solely of program ``1``.
	 */
	describe('Example n°01,', function() {
		it('should return 2 for the given input.', function() {
			var array = [
				'0 <-> 2',
				'1 <-> 1',
				'2 <-> 0, 3, 4',
				'3 <-> 2, 4',
				'4 <-> 2, 3, 6',
				'5 <-> 6',
				'6 <-> 4, 5'
			];

			expect(solve(array)).to.equal(2);
		});
	});

	/**
	 * Others examples...
	 */
	 describe('Others examples,', function() {
		it('should return 3 for the given input.', function() {
			var array = [
				'0 <-> 2',
				'1 <-> 1',
				'2 <-> 0, 3, 4',
				'3 <-> 2, 4',
				'4 <-> 2, 3, 6',
				'5 <-> 6',
				'6 <-> 4, 5',
				'7 <-> 7'
			];

			expect(solve(array)).to.equal(3);
		});
	});
});
