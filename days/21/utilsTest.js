const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 21: Tools,', function() {
	describe('The method parse the input data aka \'parse\',', function() {
		/**
		 * Rule n°01: ../.# => ##./#../...
		 */
		it('should return the correct set for the input \'../.# => ##./#../...\'.', function() {
			var str = '../.# => ##./#../...';

			expect(utils.parse(str)).to.eql({
				rule: [
					['.', '.'],
					['.', '#']
				],
				pattern: [
					['#', '#', '.'],
					['#', '.', '.'],
					['.', '.', '.']
				]
			});
		});

		/**
		 * Rule n°02: .#./..#/### => #..#/..../..../#..#
		 */
		it('should return the correct set for the input \'.#./..#/### => #..#/..../..../#..#\'.', function() {
			var str = '.#./..#/### => #..#/..../..../#..#';

			expect(utils.parse(str)).to.eql({
				rule: [
					['.', '#', '.'],
					['.', '.', '#'],
					['#', '#', '#']
				],
				pattern: [
					['#', '.', '.', '#'],
					['.', '.', '.', '.'],
					['.', '.', '.', '.'],
					['#', '.', '.', '#']
				]
			});
		});
	});

	describe('The method to build a matrix from a string aka \'toMatrix\',', function() {
		/**
		 * 2x2 example: ../.#
		 */
		it('should return the correct matrix for the input \'../.#\'.', function() {
			var str = '../.#';

			expect(utils.toMatrix(str)).to.eql([
				['.', '.'],
				['.', '#']
			]);
		});

		/**
		 * 3x3 example: .#./..#/###
		 */
		it('should return the correct matrix for the input \'.#./..#/###\'.', function() {
			var str = '.#./..#/###';

			expect(utils.toMatrix(str)).to.eql([
				['.', '#', '.'],
				['.', '.', '#'],
				['#', '#', '#']
			]);
		});
	});

	describe('The method to compare two matrix aka \'isSameMatrix\',', function() {
		/**
		 * Two equals matrix
		 */
		it('should return true if the two matrix are equal.', function () {
			var matA = [
					[1, 2],
					[3, 4]
				],
				matB = [
					[1, 2],
					[3, 4]
				];

			expect(utils.isEqualsMatrix(matA, matB)).to.eql(true);
		});

		/**
		 * Two different matrix
		 */
		it('should return false if the two matrix are not equal.', function () {
			var matA = [
					[1, 2],
					[3, 4]
				],
				matB = [
					[1, 2],
					[4, 3]
				];

			expect(utils.isEqualsMatrix(matA, matB)).to.eql(false);
		});
	});

	describe.only('The method to split matrix aka \'splitMatrix\',', function() {
		/**
		 * Case with no splitting.
		 */
		it('should return an array with one matrix for the given input.', function () {
			var matrix = [
					['.', '#', '.'],
					['.', '.', '#'],
					['#', '#', '#']
				];

			expect(utils.splitMatrix(matrix)).to.eql([matrix]);
		});

		/**
		 * Case with a 2x2 splitting
		 */
		it('should return an array with 4 matrix for the given input.', function () {
			var matrix = [
					['#', '.', '.', '#'],
					['.', '.', '.', '.'],
					['.', '.', '.', '.'],
					['#', '.', '.', '#']
				];

			expect(utils.splitMatrix(matrix)).to.eql([
				[
					['#', '.'],
					['.', '.']
				],
				[
					['.', '#'],
					['.', '.']
				],
				[
					['.', '.'],
					['#', '.']
				],
				[
					['.', '.'],
					['.', '#']
				]
			]);
		});

		/**
		 * Case with a 3x3 splitting
		 */
		it('should return an array with 4 matrix for the given input.', function () {
			var matrix = [
					['#', '#', '.', '#', '#', '.'],
					['#', '.', '.', '#', '.', '.'],
					['.', '.', '.', '.', '.', '.'],
					['#', '#', '.', '#', '#', '.'],
					['#', '.', '.', '#', '.', '.'],
					['.', '.', '.', '.', '.', '.']
				];

			expect(utils.splitMatrix(matrix)).to.eql([
				[
					['#', '#', '.'],
					['#', '.', '.'],
					['.', '.', '.']
				],
				[
					['#', '#', '.'],
					['#', '.', '.'],
					['.', '.', '.']
				],
				[
					['#', '#', '.'],
					['#', '.', '.'],
					['.', '.', '.']
				],
				[
					['#', '#', '.'],
					['#', '.', '.'],
					['.', '.', '.']
				]
			]);
		});

		/**
		 * Case with a 2x2 splitting
		 */
		it('should return an array with 16 matrix for the given input.', function () {
			var matrix = [
					['#', '#', '.', '#', '#', '.', '#', '.'],
					['#', '.', '.', '#', '.', '.', '#', '.'],
					['.', '.', '.', '.', '.', '.', '#', '.'],
					['#', '#', '.', '#', '#', '.', '#', '.'],
					['#', '.', '.', '#', '.', '.', '#', '.'],
					['.', '.', '.', '.', '.', '.', '#', '.'],
					['.', '.', '.', '.', '.', '.', '#', '.'],
					['.', '.', '.', '.', '.', '.', '#', '.']
				];

			expect(utils.splitMatrix(matrix)).to.eql([
				[
					['#', '#'],
					['#', '.']
				],
				[
					['.', '#'],
					['.', '#']
				],
				[
					['#', '.'],
					['.', '.']
				],
				[
					['#', '.'],
					['#', '.']
				],
				[
					['.', '.'],
					['#', '#']
				],
				[
					['.', '.'],
					['.', '#']
				],
				[
					['.', '.'],
					['#', '.']
				],
				[
					['#', '.'],
					['#', '.']
				],
				[
					['#', '.'],
					['.', '.']
				],
				[
					['.', '#'],
					['.', '.']
				],
				[
					['.', '.'],
					['.', '.']
				],
				[
					['#', '.'],
					['#', '.']
				],
				[
					['.', '.'],
					['.', '.']
				],
				[
					['.', '.'],
					['.', '.']
				],
				[
					['.', '.'],
					['.', '.']
				],
				[
					['#', '.'],
					['#', '.']
				]
			]);
		});
	});
});
