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

	describe.only('The method to calcul the balance of a node aka \'calculBalance\',', function() {
		/**
		 * Node without childs
		 */
		it('should return the weight as value for a node without childs.', function () {
			expect(utils.calculBalance({
				name: 'a',
				weight: 2,
				childs: []
			})).to.equal(2);
		});

		/**
		 * Node with 3 balanced childs
		 */
		it('should return 11 for a node with 3 balanced childs.', function () {
			expect(utils.calculBalance({
				name: 'a',
				weight: 2,
				childs: [
					{
						name: 'b',
						weight: 3,
						childs: []
					},
					{
						name: 'c',
						weight: 3,
						childs: []
					},
					{
						name: 'd',
						weight: 3,
						childs: []
					}
				]
			})).to.equal(11);
		});
	});
});

