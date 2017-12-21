const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 21: Tools,', function() {
	describe.only('The method parse the input data aka \'parse\',', function() {
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
});
