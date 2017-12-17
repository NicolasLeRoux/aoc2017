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

		/**
		 * Slice all list
		 */
		it('should return [3, 4, 5, 1, 2] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularSlice(array, 2, 2)).to.eql([3, 4, 5, 1, 2]);
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
		 * Simple replace (limit case)
		 */
		it('should return [1, 2, 3, 7, 8] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8], 3)).to.eql([1, 2, 3, 7, 8]);
		});

		/**
		 * Circular replace
		 */
		it('should return [9, 2, 3, 7, 8] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8, 9], 3)).to.eql([9, 2, 3, 7, 8]);
		});
	});

	describe('The method to do a circular addition,', function () {
		/**
		 * Simple add
		 */
		it('should return 4 for the given input.', function() {
			expect(utils.circularAdd(2, 2, 10)).to.equal(4);
		});

		/**
		 * Simple add (limit case)
		 */
		it('should return 9 for the given input.', function() {
			expect(utils.circularAdd(4, 5, 10)).to.equal(9);
		});

		/**
		 * Circular add
		 */
		it('should return 2 for the given input.', function() {
			expect(utils.circularAdd(3, 5, 5)).to.equal(3);
		});

		/**
		 * Circular add (limit case)
		 */
		it('should return 0 for the given input.', function() {
			expect(utils.circularAdd(5, 5, 10)).to.equal(0);
		});
	});

	describe('The method to knot a hash list following the given steps,', function () {
		/**
		 * Example n°01: With the hash list [0, 1, 2, 3, 4] and the steps [3, 4
		 * 1, 5], the generated knotted hash list should return [3, 4, 2, 1, 0]
		 */
		it('should return [3, 4, 2, 1, 0] for the given inputs.', function () {
			var steps = [3, 4, 1, 5];

			expect(utils.knotHashList(5, steps)).to.eql([3, 4, 2, 1, 0]);
		});
	});
});