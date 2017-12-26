const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 24: Electromagnetic Moat (Part two),', function() {
	/**
	 * Example n°01: With a small set of components
	 */
	describe('Example n°01,', function() {
		it('should return 19 for the given input.', function() {
			var array = [
				'0/2',
				'2/2',
				'2/3',
				'3/4',
				'3/5',
				'0/1',
				'10/1',
				'9/10'
			];

			expect(solve(array)).to.equal(19);
		});
	});
});
