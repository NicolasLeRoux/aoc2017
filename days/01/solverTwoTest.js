const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 1: Inverse Captcha (Part two),', function() {
	/**
	 * Example n°01: 1212 produces 6: the list contains 4 items, and all four
	 * digits match the digit 2 items ahead.
	 */
	describe('Example n°01,', function() {
		it('should return 6 when the value is 1212.', function() {
			expect(solve('1212')).to.equal(6);
		});
	});

	/**
	 * Example n°02: 1221 produces 0, because every comparison is between a 1 and a 2.
	 */
	describe('Example n°02,', function() {
		it('should return 0 when the value is 1221.', function() {
			expect(solve('1221')).to.equal(0);
		});
	});

	/**
	 * Example n°03: 123425 produces 4, because both 2s match each other, but no
	 * other digit has a match.
	 */
	describe('Example n°03,', function() {
		it('should return 4 when the value is 123425.', function() {
			expect(solve('123425')).to.equal(4);
		});
	});

	/**
	 * Example n°04: 123123 produces 12
	 */
	describe('Example n°04,', function() {
		it('should return 12 when the value is 123123.', function() {
			expect(solve('123123')).to.equal(12);
		});
	});

	/**
	 * Example n°05: 12131415 produces 4
	 */
	describe('Example n°05,', function() {
		it('should return 4 when the value is 12131415.', function() {
			expect(solve('12131415')).to.equal(4);
		});
	});
});
