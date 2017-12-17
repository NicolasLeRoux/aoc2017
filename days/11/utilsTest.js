const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 11: Tools,', function() {
	describe('The method to calculate fewest number of steps aka \'calFewestSteps\',', function() {
		/**
		 * Simple position
		 */
		it('should return 1 for the input x: 0 and y: -2.', function() {
			expect(utils.calFewestSteps(0, -2)).to.eql(1);
		});

		/**
		 * Complexe position
		 */
		it('should return 21 for the input x: 20 and y: 222.', function() {
			expect(utils.calFewestSteps(20, 22)).to.eql(21);
		});
	});
});
