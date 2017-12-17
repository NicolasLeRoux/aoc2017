const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 13: Packet Scanners (Part one),', function() {
	/**
	 * Example n°01: for the following layers
	 * 0: 3
	 * 1: 2
	 * 4: 4
	 * 6: 4
	 * The trip severity is 0*3 + 6*4 = 24.
	 */
	describe('Example n°01,', function() {
		it('should return 24 for the given input.', function() {
			var array = [
				'0: 3',
				'1: 2',
				'4: 4',
				'6: 4'
			];

			expect(solve(array)).to.equal(24);
		});
	});
});
