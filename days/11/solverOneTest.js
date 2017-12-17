const expect = require('expect.js');
const solve = require('./solverOne.js');

describe.only('Day 11: Hex Ed (Part one),', function() {
	/**
	 * Example n°01: ne,ne,ne is 3 steps away.
	 */
	describe('Example n°01,', function() {
		it('should return 3 for the input \'ne,ne,ne\'.', function() {
			expect(solve(['ne', 'ne', 'ne'])).to.equal(3);
		});
	});

	/**
	 * Example n°02: ne,ne,sw,sw is 0 steps away (back where you started).
	 */
	describe('Example n°02,', function() {
		it('should return 0 for the input \'ne,ne,sw,sw\'.', function() {
			expect(solve(['ne', 'ne', 'sw', 'sw'])).to.equal(0);
		});
	});

	/**
	 * Example n°03: ne,ne,s,s is 2 steps away (se,se).
	 */
	describe('Example n°03,', function() {
		it('should return 2 for the input \'ne,ne,s,s\'.', function() {
			expect(solve(['ne', 'ne', 's', 's'])).to.equal(2);
		});
	});

	/**
	 * Example n°04: se,sw,se,sw,sw is 3 steps away (s,s,sw).
	 */
	describe('Example n°04,', function() {
		it('should return 3 for the input \'se,sw,se,sw,sw\'.', function() {
			expect(solve(['se', 'sw', 'se', 'sw', 'sw'])).to.equal(3);
		});
	});

	/**
	 * Others examples..
	 */
	describe('Others examples,', function() {
		it('should return 1 for the input \'n,se,s,sw,nw,n,ne\'.', function() {
			expect(solve(['n', 'se', 's', 'sw', 'nw', 'n', 'ne'])).to.equal(1);
		});
	});
});
