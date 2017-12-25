const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe.skip('Day 10: Knot Hash (Part two),', function() {
	/**
	 * Example n°01: The empty string becomes ``a2582a3a0e66e6e86e3812dcb672a272``.
	 */
	describe('Example n°01,', function() {
		it('should return \'a2582a3a0e66e6e86e3812dcb672a272\' for the input \'\'.', function() {
			expect(solve('')).to.equal('a2582a3a0e66e6e86e3812dcb672a272');
		});
	});

	/**
	 * Example n°02: ``AoC 2017`` becomes ``33efeb34ea91902bb2f59c9920caa6cd``.
	 */
	describe('Example n°02,', function() {
		it('should return \'33efeb34ea91902bb2f59c9920caa6cd\' for the input \'AoC 2017\'.', function() {
			expect(solve('AoC 2017')).to.equal('33efeb34ea91902bb2f59c9920caa6cd');
		});
	});

	/**
	 * Example n°03: ``1,2,3`` becomes ``3efbe78a8d82f29979031a4aa0b16a9d``.
	 */
	describe('Example n°03,', function() {
		it('should return \'3efbe78a8d82f29979031a4aa0b16a9d\' for the input \'1,2,3\'.', function() {
			expect(solve('1,2,3')).to.equal('3efbe78a8d82f29979031a4aa0b16a9d');
		});
	});

	/**
	 * Example n°04: ``1,2,4`` becomes ``63960835bcdc130f0b66d7ff4f6a5a8e``.
	 */
	describe('Example n°04,', function() {
		it('should return \'63960835bcdc130f0b66d7ff4f6a5a8e\' for the input \'1,2,4\'.', function() {
			expect(solve('1,2,4')).to.equal('63960835bcdc130f0b66d7ff4f6a5a8e');
		});
	});
});
