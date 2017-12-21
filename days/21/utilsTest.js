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
		it('should return x for the input \'.#./..#/### => #..#/..../..../#..#\'.', function() {
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

	describe.only('The method to build a matrix from a string aka \'toMatrix\',', function() {
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
});
