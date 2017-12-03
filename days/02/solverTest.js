const expect = require('expect.js');
const solve = require('./solver.js');

describe('Day 2: Corruption Checksum,', function() {
	/**
	 * Example n°01: For the given the following spreadsheet,
	 *
	 * 5 1 9 5
	 * 7 5 3
	 * 2 4 6 8
	 *
	 * The first row's largest and smallest values are 9 and 1, and their difference
	 * is 8.
	 * The second row's largest and smallest values are 7 and 3, and their
	 * difference is 4.
	 * The third row's difference is 6.
	 *
	 * In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
	 */
	describe('Example n°01,', function() {
		it('should return 18 for the given matrix.', function() {
			let matrix = [
				['5', '1', '9', '5'],
				['7', '5', '3'],
				['2', '4', '6', '8']
			];
			expect(solve(matrix)).to.equal(18);
		});
	});
});
