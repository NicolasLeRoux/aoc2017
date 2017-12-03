const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 2: Corruption Checksum (Part two),', function() {
	/**
	 * Example n°01: For the given the following spreadsheet,
	 *
	 * 5 9 2 8
	 * 9 4 7 3
	 * 3 8 6 5
	 *
	 * In the first row, the only two numbers that evenly divide are 8 and 2; the
	 * result of this division is 4.
	 * In the second row, the two numbers are 9 and 3; the result is 3.
	 * In the third row, the result is 2.
	 *
	 * In this example, the sum of the results would be 4 + 3 + 2 = 9.
	 */
	describe('Example n°01,', function() {
		it('should return 9 for the given matrix.', function() {
			let matrix = [
				['5', '9', '2', '8'],
				['9', '4', '7', '3'],
				['3', '8', '6', '5']
			];
			expect(solve(matrix)).to.equal(9);
		});
	});
});
