const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 5: A Maze of Twisty Trampolines, All Alike (Part one),', function() {
	/**
	 * Example n°01: In this example, the exit is reached in 5 steps.
	 */
	describe('Example n°01,', function() {
		it('should return 5 for the given input.', function() {
			var array = [
				'0',
				'3',
				'0',
				'1',
				'-3'
			];

			expect(solve(array)).to.equal(5);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 8 for the given input.', function() {
			var array = [
				'1',
				'1',
				'-1',
				'-2',
				'-3'
			];

			expect(solve(array)).to.equal(8);
		});

		it('should return 8 for the given input.', function() {
			var array = [
				'1',
				'-1',
				'-1'
			];

			expect(solve(array)).to.equal(8);
		});
	});
});

