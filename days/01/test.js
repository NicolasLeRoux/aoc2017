const expect = require('expect.js');
const solve = require('./solver.js');

describe('Day 1: Inverse Captcha,', function() {
	/**
	 * Example n°01: 1122 produces a sum of 3 (1 + 2) because the first digit (1)
	 * matches the second digit and the third digit (2) matches the fourth digit.
	 */
	describe('Example n°01,', function() {
		it('should return 3 when the value is 1122.', function() {
			expect(solve('1122')).to.equal(3);
		});

		it('should return 13 when the value is 8855.', function() {
			expect(solve('8855')).to.equal(13);
		});
	});

	/**
	 * Example n°02: 1111 produces 4 because each digit (all 1) matches the next.
	 */
	describe('Example n°02,', function() {
		it('should return 4 when the value is 1111.', function() {
			expect(solve('1111')).to.equal(4);
		});

		it('should return 20 when the value is 5555.', function() {
			expect(solve('5555')).to.equal(20);
		});
	});

	/**
	 * Example n°03: 1234 produces 0 because no digit matches the next.
	 */
	describe('Example n°03,', function() {
		it('should return 0 when the value is 1234.', function() {
			expect(solve('1234')).to.equal(0);
		});

		it('should return 0 when the value is 6429.', function() {
			expect(solve('6429')).to.equal(0);
		});
	});

	/**
	 * Example n°04: 91212129 produces 9 because the only digit that matches the
	 * next one is the last digit, 9.
	 */
	describe('Example n°04,', function() {
		it('should return 9 when the value is 91212129.', function() {
			expect(solve('91212129')).to.equal(9);
		});

		it('should return 6 when the value is 612596.', function() {
			expect(solve('612596')).to.equal(6);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 0 when the value is 12341234.', function() {
			expect(solve('12341234')).to.equal(0);
		});

		it('should return 2 when the value is 1221.', function() {
			expect(solve('1223')).to.equal(2);
		});

		it('should return 10 when the value is 144266.', function() {
			expect(solve('144266')).to.equal(10);
		});

		it('should return 5 when the value is 211112.', function() {
			expect(solve('211112')).to.equal(5);
		});
	});
});
