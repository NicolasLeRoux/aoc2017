const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 9: Stream Processing (Part two),', function() {
	/**
	 * Example n°01: <>, 0 characters.
	 */
	describe('Example n°01,', function() {
		it('should return 0 for the input \'<>\'.', function() {
			expect(solve('<>')).to.equal(0);
		});
	});

	/**
	 * Example n°02: <random characters>, 17 characters.
	 */
	describe('Example n°02,', function() {
		it('should return 17 for the input \'<random characters>\'.', function() {
			expect(solve('<random characters>')).to.equal(17);
		});
	});

	/**
	 * Example n°03: <<<<>, 3 characters.
	 */
	describe('Example n°03,', function() {
		it('should return 3 for the input \'<<<<>\'.', function() {
			expect(solve('<<<<>')).to.equal(3);
		});
	});

	/**
	 * Example n°04: <{!>}>, 2 characters.
	 */
	describe('Example n°04,', function() {
		it('should return 2 for the input \'<{!>}>\'.', function() {
			expect(solve('<{!>}>')).to.equal(2);
		});
	});

	/**
	 * Example n°05: <!!>, 0 characters.
	 */
	describe('Example n°05,', function() {
		it('should return 0 for the input \'<!!>\'.', function() {
			expect(solve('<!!>')).to.equal(0);
		});
	});

	/**
	 * Example n°06: <!!!>>, 0 characters.
	 */
	describe('Example n°06,', function() {
		it('should return 0 for the input \'<!!!>>\'.', function() {
			expect(solve('<!!!>>')).to.equal(0);
		});
	});

	/**
	 * Example n°07: <{o"i!a,<{i<a>, 10 characters.
	 */
	describe('Example n°07,', function() {
		it('should return 10 for the input \'<{o"i!a,<{i<a>\'.', function() {
			expect(solve('<{o"i!a,<{i<a>')).to.equal(10);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Othes examples,', function() {
		it('should return 6 for the input \'<<<<<<<>\'.', function() {
			expect(solve('<<<<<<<>')).to.equal(6);
		});

		it.only('should return 7 for the input \'{{<a!r>},{<a>},{<abc>},{<ab>}}\'.', function() {
			expect(solve('{{<a!r>},{<a>},{<abc>},{<ab>}}')).to.equal(7);
		});
	});
});
