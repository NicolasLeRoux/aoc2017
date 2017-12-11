const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 9: Stream Processing (Part one),', function() {
	/**
	 * Example n°01: {}, score of 1. 
	 */
	describe('Example n°01,', function() {
		it('should return 1 for the input \'{}\'.', function() {
			expect(solve('{}')).to.equal(1);
		});
	});

	/**
	 * Example n°02: {{{}}}, score of 1 + 2 + 3 = 6.
	 */
	describe('Example n°02,', function() {
		it('should return 6 for the input \'{{{}}}\'.', function() {
			expect(solve('{{{}}}')).to.equal(6);
		});
	});

	/**
	 * Example n°03: {{},{}}, score of 1 + 2 + 2 = 5.
	 */
	describe('Example n°03,', function() {
		it('should return 5 for the input \'{{},{}}\'.', function() {
			expect(solve('{{},{}}')).to.equal(5);
		});
	});

	/**
	 * Example n°04: {{{},{},{{}}}}, score of 1 + 2 + 3 + 3 + 3 + 4 = 16.
	 */
	describe('Example n°04,', function() {
		it('should return 16 for the input \'{{{},{},{{}}}}\'.', function() {
			expect(solve('{{{},{},{{}}}}')).to.equal(16);
		});
	});

	/**
	 * Example n°05: {<a>,<a>,<a>,<a>}, score of 1.
	 */
	describe('Example n°05,', function() {
		it('should return 1 for the input \'{<a>,<a>,<a>,<a>}\'.', function() {
			expect(solve('{<a>,<a>,<a>,<a>}')).to.equal(1);
		});
	});

	/**
	 * Example n°06: {{<ab>},{<ab>},{<ab>},{<ab>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
	 */
	describe('Example n°06,', function() {
		it('should return 9 for the input \'{{<ab>},{<ab>},{<ab>},{<ab>}}\'.', function() {
			expect(solve('{{<ab>},{<ab>},{<ab>},{<ab>}}')).to.equal(9);
		});
	});

	/**
	 * Example n°07: {{<!!>},{<!!>},{<!!>},{<!!>}}, score of 1 + 2 + 2 + 2 + 2 = 9.
	 */
	describe('Example n°07,', function() {
		it('should return 9 for the input \'{{<!!>},{<!!>},{<!!>},{<!!>}}\'.', function() {
			expect(solve('{{<!!>},{<!!>},{<!!>},{<!!>}}')).to.equal(9);
		});
	});

	/**
	 * Example n°08: {{<a!>},{<a!>},{<a!>},{<ab>}}, score of 1 + 2 = 3.
	 */
	describe('Example n°08,', function() {
		it('should return 3 for the input \'{{<a!>},{<a!>},{<a!>},{<ab>}}\'.', function() {
			expect(solve('{{<a!>},{<a!>},{<a!>},{<ab>}}')).to.equal(3);
		});
	});
});
