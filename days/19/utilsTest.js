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

	describe('The method to get the initial position aka \'getInitialPosition\',', function() {
		/**
		 * Simple starting point
		 */
		it('should return x:2, y:0 and dir:S for a maze with a simple starting point.', function() {
			var matrix = [
				[' ', ' ', '|', ' ']
			];

			expect(utils.getInitialPosition(matrix)).to.eql({
				x: 2,
				y: 0,
				dir: 'S'
			});
		});
	});

	describe('The method to get the value in the matrix at a given position aka \'getAt\',', function() {
		var matrix = [
			['a', 'b', 'c'],
			['d', 'e', 'f'],
			['g', 'h', 'i'],
		];

		/**
		 * Simple case
		 */
		it('should return e for the given input.', function () {
			var position = {
				x: 1,
				y: 1
			};

			expect(utils.getAt(matrix, position)).to.eql('e');
		});

		/**
		 * Simple case bis
		 */
		it('should return c for the given input.', function () {
			var position = {
				x: 2,
				y: 0
			};

			expect(utils.getAt(matrix, position)).to.eql('c');
		});

		/**
		 * Simple case ter
		 */
		it('should return g for the given input.', function () {
			var position = {
				x: 0,
				y: 2
			};

			expect(utils.getAt(matrix, position)).to.eql('g');
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
					x: 1,
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
					x: 1,
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
					x: 1,
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
					x: 0,
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
					y: 1,
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
					x: 1,
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
					y: 1,
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
					x: 1,
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
					x: 1,
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
					x: 1,
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
