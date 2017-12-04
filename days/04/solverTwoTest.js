const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 4: High-Entropy Passphrases (Part two),', function() {
	/**
	 * Example n°01: abcde fghij is a valid passphrase.
	 */
	describe('Example n°01,', function() {
		it('should return 1 when the value as one valid passphrase.', function() {
			var array = [
				'abcde fghij'
			];

			expect(solve(array)).to.equal(1);
		});
	});

	/**
	 * Example n°02: abcde xyz ecdab is not valid - the letters from the third
	 * word can be rearranged to form the first word.
	 */
	describe('Example n°02,', function() {
		it('should return 0 when the value as zero valid passphrase.', function() {
			var array = [
				'abcde xyz ecdab'
			];

			expect(solve(array)).to.equal(0);
		});
	});

	/**
	 * Example n°03: a ab abc abd abf abj is a valid passphrase, because all
	 * letters need to be used when forming another word.
	 */
	describe('Example n°03,', function() {
		it('should return 1 when the value as one valid passphrase.', function() {
			var array = [
				'a ab abc abd abf abj'
			];

			expect(solve(array)).to.equal(1);
		});
	});

	/**
	 * Example n°04: iiii oiii ooii oooi oooo is valid.
	 */
	describe('Example n°04,', function() {
		it('should return 1 when the value as one valid passphrase.', function() {
			var array = [
				'iiii oiii ooii oooi oooo'
			];

			expect(solve(array)).to.equal(1);
		});
	});

	/**
	 * Example n°05: oiii ioii iioi iiio is not valid - any of these words can
	 * be rearranged to form any other word.
	 */
	describe('Example n°05,', function() {
		it('should return 0 when the value as zero valid passphrase.', function() {
			var array = [
				'oiii ioii iioi iiio'
			];

			expect(solve(array)).to.equal(0);
		});
	});
});

