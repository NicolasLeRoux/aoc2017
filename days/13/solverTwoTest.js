const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 13: Packet Scanners (Part two),', function() {
	/**
	 * Example n°01: for the following layers
	 * 0: 3
	 * 1: 2
	 * 4: 4
	 * 6: 4
	 * The fewest number of picoseconds you would need to delay to get through
	 * safely is 10.
	 * /!\ Warning, in this case, we got touch with a delay of 4 in the layer 0,
	 * so the severity stay 0
	 */
	describe('Example n°01,', function() {
		it('should return 10 for the given input.', function() {
			var array = [
				'0: 3',
				'1: 2',
				'4: 4',
				'6: 4'
			];

			expect(solve(array)).to.equal(10);
		});
	});
});

