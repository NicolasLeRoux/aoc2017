const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 4: High-Entropy Passphrases (Part one),', function() {
	/**
	 * Example n°01: aa bb cc dd ee is valid.
	 */
	describe('Example n°01,', function() {
		it('should return 1 when the value as one valid passphrase.', function() {
			var array = [
				'aa bb cc dd ee'
			];

			expect(solve(array)).to.equal(1);
		});
	});

	/**
	 * Example n°02: aa bb cc dd aa is not valid - the word aa appears more than
	 * once.
	 */
	describe('Example n°02,', function() {
		it('should return 0 when the value as zero valid passphrase.', function() {
			var array = [
				'aa bb cc dd aa'
			];

			expect(solve(array)).to.equal(0);
		});
	});

	/**
	 * Example n°03: aa bb cc dd aaa is valid - aa and aaa count as different words.
	 */
	describe('Example n°03,', function() {
		it('should return 1 when the value as one valid passphrase.', function() {
			var array = [
				'aa bb cc dd aaa'
			];

			expect(solve(array)).to.equal(1);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 5 when the value as one valid passphrase.', function() {
			var array = [
				'pphsv ojtou brvhsj cer ntfhlra udeh ccgtyzc zoyzmh jum lugbnk', // Valid
				'vxjnf fzqitnj uyfck blnl impo kxoow nngd worcm bdesehw', // Valid
				'caibh nfuk kfnu llfdbz uxjty yxjut jcea', // Valid
				'qiho qif eupwww avyglnj nxzotsu hio lws', // Valid
				'xjty usocjsh pivk qnknunc yjcgh bwya djw zpyr' // Valid
			];

			expect(solve(array)).to.equal(5);
		});

		it('should return 2 when the value as one valid passphrase.', function() {
			var array = [
				'pphsv ojtou ntfhlra ccgtyzc zoyzmh jum', // Valid
				'vxjnf uyfck blnl impo kxoow nngd blnl worcm bdesehw', // Invalid
				'caibh nfuk kfnu llfdbz uxjty yxjut jcea', // Valid
				'qiho qif eupwww avyglnj nxzotsu hio lws nxzotsu ', // Invalid
				'xjty usocjsh pivk qnknunc yjcgh usocjsh bwya djw zpyr' // Invalid
			];

			expect(solve(array)).to.equal(2);
		});
	});
});
