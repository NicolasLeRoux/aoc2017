const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 13: Tools,', function() {
	describe('The method to build a map of layers aka \'buildLayersMap\',', function() {
		/**
		 * Simple input
		 */
		it('should return the correct map for the given input.', function() {
			var array = [
				'0: 3',
				'1: 2',
				'4: 4',
				'6: 4'
			];

			expect(utils.buildLayersMap(array)).to.eql({
				'0': '3',
				'1': '2',
				'4': '4',
				'6': '4'
			});
		});
	});
});
