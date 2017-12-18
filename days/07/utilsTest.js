const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 07: Tools,', function() {
	describe('The method to recursive circus parsing aka \'parse\',', function() {
		/**
		 * Simple example: pbga (66)
		 */
		it('should return the correct object for the input \'pbga (66)\'.', function() {
			expect(utils.parse('pbga (66)')).to.eql({
				name: 'pbga',
				weight: 66,
				childs: []
			});
		});

		/**
		 * Complexe example: pbga (66) -> ktlj, cntj, xhth
		 */
		it('should return the correct object for the input \'pbga (66) -> ktlj, cntj, xhth\'.', function() {
			expect(utils.parse('pbga (66) -> ktlj, cntj, xhth')).to.eql({
				name: 'pbga',
				weight: 66,
				childs: ['ktlj', 'cntj', 'xhth']
			});
		});
	});
});

