const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 3: Spiral Memory (Part one),', function() {
	/**
	 * Example n°01: Data from square 1 is carried 0 steps, since it's at the access
	 * port.
	 */
	describe('Example n°01,', function() {
		it('should return 0 when the value is 1.', function() {
			expect(solve('1')).to.equal(0);
		});
	});

	/**
	 * Example n°02: Data from square 12 is carried 3 steps, such as: down, left,
	 * left.
	 */
	describe('Example n°02,', function() {
		it('should return 3 when the value is 12.', function() {
			expect(solve('12')).to.equal(3);
		});
	});

	/**
	 * Example n°03: Data from square 23 is carried only 2 steps: up twice.
	 */
	describe('Example n°03,', function() {
		it('should return 2 when the value is 23.', function() {
			expect(solve('23')).to.equal(2);
		});
	});

	/**
	 * Example n°04: Data from square 1024 must be carried 31 steps.
	 */
	describe('Example n°04,', function() {
		it('should return 31 when the value is 1024.', function() {
			expect(solve('1024')).to.equal(31);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Example n°04,', function() {
		it('should return 1 when the value is 8.', function() {
			expect(solve('8')).to.equal(1);
		});

		it('should return 4 when the value is 17.', function() {
			expect(solve('17')).to.equal(4);
		});

		it('should return 5 when the value is 26.', function() {
			expect(solve('26')).to.equal(5);
		});

		it('should return 4 when the value is 21.', function() {
			expect(solve('21')).to.equal(4);
		});

		it('should return 3 when the value is 14.', function() {
			expect(solve('14')).to.equal(3);
		});
	});
});
