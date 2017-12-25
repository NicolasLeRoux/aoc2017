const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 24: Tools,', function() {
	describe('The method to parse the input data aka \'parse\',', function() {
		/**
		 * Simple component
		 */
		it('should return a component for the given input.', function() {
			var str = '0/2';

			expect(utils.parse(str)).to.eql(null);
		});
	});
});
