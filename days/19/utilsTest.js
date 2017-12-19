const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 19: Tools,', function() {
	describe('The method find the maze starting point aka \'findStartingPoint\',', function() {
		/**
		 * No starting point.
		 */
		it('should return -1 for a maze with no starting point.', function() {
			var matrix = [
				[' ', ' ', ' ', ' ']
			];

			expect(utils.findStartingPoint(matrix)).to.eql(-1);
		});

		/**
		 * Simple starting point
		 */
		it('should return 2 for a maze with a simple starting point.', function() {
			var matrix = [
				[' ', ' ', '|', ' ']
			];

			expect(utils.findStartingPoint(matrix)).to.eql(2);
		});
	});

	describe('The method to get the next position in the maze aka \'getNextPosition\',', function() {
		var array = [
			{
				title: 'should return x:1, y:1 and dir:S for the given input.',
				matrix: [
					[' ', '|'],
					[' ', '|']
				],
				position: {
					x: 0,
					y: 0,
					dir: 'S'
				},
				expected: {
					x: 1,
					y: 1,
					dir: 'S'
				}
			},
			{
				title: 'should return x:1, y:1 and dir:S for the given input.',
				matrix: [
					[' ', '|'],
					[' ', 'A']
				],
				position: {
					x: 0,
					y: 0,
					dir: 'S'
				},
				expected: {
					x: 1,
					y: 1,
					dir: 'S'
				}
			},
			{
				title: 'should return x:1, y:1 and dir:S for the given input.',
				matrix: [
					[' ', 'B'],
					[' ', '|']
				],
				position: {
					x: 0,
					y: 0,
					dir: 'S'
				},
				expected: {
					x: 1,
					y: 1,
					dir: 'S'
				}
			},
			{
				title: 'should return x:0, y:0 and dir:N for the given input.',
				matrix: [
					['|', ' '],
					['|', ' ']
				],
				position: {
					x: 1,
					y: 1,
					dir: 'N'
				},
				expected: {
					x: 0,
					y: 0,
					dir: 'N'
				}
			},
			{
				title: 'should return x:1, y:1 and dir:E for the given input.',
				matrix: [
					[' ', ' '],
					['-', '-']
				],
				position: {
					x: 0,
					y: 1,
					dir: 'E'
				},
				expected: {
					x: 1,
					y: 1,
					dir: 'E'
				}
			},
			{
				title: 'should return x:0, y:1 and dir:W for the given input.',
				matrix: [
					[' ', ' '],
					['-', '-']
				],
				position: {
					x: 1,
					y: 1,
					dir: 'W'
				},
				expected: {
					x: 0,
					y: 1,
					dir: 'W'
				}
			},
			{
				title: 'should return x:1, y:2 and dir:S for the given input.',
				matrix: [
					[' ', '|', ' '],
					['-', '-', '-'],
					[' ', '|', ' ']
				],
				position: {
					x: 1,
					y: 0,
					dir: 'S'
				},
				expected: {
					x: 1,
					y: 2,
					dir: 'S'
				}
			},
			{
				title: 'should return x:2, y:1 and dir:E for the given input.',
				matrix: [
					[' ', '|', ' '],
					['A', '|', '-'],
					[' ', '|', ' ']
				],
				position: {
					x: 0,
					y: 1,
					dir: 'E'
				},
				expected: {
					x: 2,
					y: 1,
					dir: 'E'
				}
			},
			{
				title: 'should return x:2, y:1 and dir:E for the given input.',
				matrix: [
					[' ', '|', ' '],
					[' ', '+', '-'],
					[' ', ' ', ' ']
				],
				position: {
					x: 1,
					y: 1,
					dir: 'S'
				},
				expected: {
					x: 2,
					y: 1,
					dir: 'E'
				}
			},
			{
				title: 'should return x:2, y:1 and dir:E for the given input.',
				matrix: [
					[' ', ' ', ' '],
					[' ', '+', '-'],
					[' ', '|', ' ']
				],
				position: {
					x: 1,
					y: 2,
					dir: 'N'
				},
				expected: {
					x: 2,
					y: 1,
					dir: 'E'
				}
			},
			{
				title: 'should return x:1, y:2 and dir:S for the given input.',
				matrix: [
					[' ', ' ', ' '],
					['-', '+', ' '],
					[' ', '|', ' ']
				],
				position: {
					x: 0,
					y: 1,
					dir: 'E'
				},
				expected: {
					x: 1,
					y: 2,
					dir: 'S'
				}
			},
			{
				title: 'should return x:1, y:2 and dir:S for the given input.',
				matrix: [
					[' ', ' ', ' '],
					[' ', '+', '-'],
					[' ', '|', ' ']
				],
				position: {
					x: 2,
					y: 1,
					dir: 'W'
				},
				expected: {
					x: 1,
					y: 2,
					dir: 'S'
				}
			},
			{
				title: 'should return x:1, y:0 and dir:N for the given input.',
				matrix: [
					[' ', '|', ' '],
					[' ', '+', '-'],
					[' ', ' ', ' ']
				],
				position: {
					x: 2,
					y: 1,
					dir: 'W'
				},
				expected: {
					x: 1,
					y: 0,
					dir: 'N'
				}
			}
		];

		/**
		 * Parameterized test
		 */
		array.forEach(test => {
			it(test.title, function () {
				expect(utils.getNextPosition(test.matrix, test.position)).to.eql(test.expected);
			});
		});
	});
});
