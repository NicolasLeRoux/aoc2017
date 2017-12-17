const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 12: Digital Plumber (Part one),', function() {
	/**
	 * Example n°01: For the following list
	 * 0 <-> 2
	 * 1 <-> 1
	 * 2 <-> 0, 3, 4
	 * 3 <-> 2, 4
	 * 4 <-> 2, 3, 6
	 * 5 <-> 6
	 * 6 <-> 4, 5
	 * A total of 6 programs are in this group that contains program ID 0.
	 */
	describe('Example n°01,', function() {
		it('should return 6 for the given input.', function() {
			var array = [
				'0 <-> 2',
				'1 <-> 1',
				'2 <-> 0, 3, 4',
				'3 <-> 2, 4',
				'4 <-> 2, 3, 6',
				'5 <-> 6',
				'6 <-> 4, 5'
			];

			expect(solve(array)).to.equal(6);
		});
	});
});
