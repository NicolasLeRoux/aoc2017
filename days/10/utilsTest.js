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
		 * Simple replace bis
		 */
		it('should return [7, 8, 3, 4, 5] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8], 0)).to.eql([7, 8, 3, 4, 5]);
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

		/**
		 * Circular replace bis
		 */
		it('should return [1, 2, 7, 8, 9] for the given input.', function() {
			var array = [1, 2, 3, 4, 5];

			expect(utils.circularReplace(array, [7, 8, 9], 12)).to.eql([1, 2, 7, 8, 9]);
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

		/**
		 * Example n°02: With the hash list [0, 1, 2, 3, 4] and the steps [0],
		 * the generated knotted hash list should return [0, 1, 2, 3, 4]
		 */
		it('should return [0, 1, 2, 3, 4] for the given inputs.', function () {
			var steps = [0];

			expect(utils.knotHashList(5, steps)).to.eql([0, 1, 2, 3, 4]);
		});
	});

	describe('The method to convert a string in an array of ASCII aka \'toASCII\',', function () {
		/**
		 * 1,2,3 should be convert into 49,44,50,44,51 in ASCII.
		 */
		it('Should return [49,44,50,44,51] for the input \'1,2,3\',', function () {
			expect(utils.toASCII('1,2,3')).to.eql([49, 44, 50, 44, 51]);
		});
	});

	describe('The method to add the standard length suffix values aka \'addStandardSuffix\',', function () {
		/**
		 * 1,2,3 should be convert into 49,44,50,44,51 in ASCII.
		 */
		it('Should return [49, 44, 50, 44, 51, 17, 31, 73, 47, 23] for the input [49, 44, 50, 44, 51],', function () {
			var array = [49, 44, 50, 44, 51];

			expect(utils.addStandardSuffix(array)).to.eql([49, 44, 50, 44, 51, 17, 31, 73, 47, 23]);
		});
	});

	describe('The method to reduce a sparse hash into a dense hash aka \'reduceSparseHash\',', function () {
		/**
		 * Should combine each consecutive block of 16 numbers in the sparse hash.
		 * 65 ^ 27 ^ 9 ^ 1 ^ 4 ^ 3 ^ 40 ^ 50 ^ 91 ^ 7 ^ 6 ^ 0 ^ 2 ^ 5 ^ 68 ^ 22 = 64
		 */
		it('Should return [64] for the given input.', function () {
			var array = [65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22];

			expect(utils.reduceSparseHash(array)).to.eql([64]);
		});

		/**
		 * Input with more than one block.
		 */
		it('Should return [22, 54] for the given input.', function () {
			var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22];
			array = array.concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54]);

			expect(utils.reduceSparseHash(array)).to.eql([22, 54]);
		});
	});
});
