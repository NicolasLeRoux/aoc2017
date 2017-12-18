const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 07: Tools,', function() {
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

	describe('The method to build a circus tower aka \'buildCircusTower\',', function() {
		/**
		 * Simple tower
		 */
		it('should return the correct tower for the given input.', function () {
			var array = [
				'a (2)',
				'b (2)',
				'c (2)',
				'd (4) -> a, b, c'
			];

			expect(utils.buildCircusTower(array)).to.eql({
				name: 'd',
				weight: 4,
				childs: [
					{
						name: 'a',
						weight: 2,
						childs: []
					},
					{
						name: 'b',
						weight: 2,
						childs: []
					},
					{
						name: 'c',
						weight: 2,
						childs: []
					}
				]
			});
		});
	});
});

