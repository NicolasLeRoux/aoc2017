const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe.only('Day 3: Spiral Memory (Part two),', function() {
	/**
	 * Example n°01: Square 3 has both of the above squares as neighbors and stores
	 * the sum of their values, 2.
	 */
	describe('Example n°01,', function() {
		it('should return 2 when the value is 1.', function() {
			expect(solve('1')).to.equal(2);
		});
	});

	/**
	 * Example n°02: Square 4 has all three of the aforementioned squares as neighbors
	 * and stores the sum of their values, 4.
	 */
	describe('Example n°02,', function() {
		it('should return 4 when the value is 2.', function() {
			expect(solve('2')).to.equal(4);
		});
	});

	/**
	 * Example n°03: Square 5 only has the first and fourth squares as neighbors,
	 * so it gets the value 5.
	 */
	describe('Example n°02,', function() {
		it('should return 5 when the value is 4.', function() {
			expect(solve('4')).to.equal(5);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 26 when the value is 25.', function() {
			expect(solve('25')).to.equal(26);
		});

		it('should return 362 when the value is 351.', function() {
			expect(solve('351')).to.equal(362);
		});
	});
});
