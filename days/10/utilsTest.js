const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 10: Tools,', function() {
	describe('The method to do a circular slice aka \'circularSlice\',', function() {
		/**
		 * Simple slice.
		 */
		it('should return [2, 3] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularSlice(array, 1, 3)).to.eql([2, 3]);
		});

		/**
		 * Circular slice.
		 */
		it('should return [4, 5, 1] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularSlice(array, 3, 1)).to.eql([4, 5, 1]);
		});
	});

	describe('The method to do a circular replace aka \'circularReplace\',', function() {
		/**
		 * Simple replace
		 */
		it('should return [1, 7, 8, 4, 5] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8], 1)).to.eql([1, 7, 8, 4, 5]);
		});

		/**
		 * Circular replace
		 */
		it('should return [9, 2, 3, 7, 8] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8, 9], 3)).to.eql([9, 2, 3, 7, 8]);
		});
	});
});
