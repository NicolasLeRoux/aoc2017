const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 9: Tools,', function() {
	describe('The method to find the garbage end aka \'getEndOfGarbageIndex\',', function() {
		/**
		 * Example n°01: <>, empty garbage.
		 */
		it('should return 1 for en empty garbage.', function() {
			expect(utils.getEndOfGarbageIndex('<>')).to.equal(1);
		});

		/**
		 * Example n°02: <random characters>, garbage containing random characters.
		 */
		it('should return 18 for garbage containing random characters.', function() {
			expect(utils.getEndOfGarbageIndex('<random characters>')).to.equal(18);
		});

		/**
		 * Example n°03: <<<<>, because the extra < are ignored.
		 */
		it('should return 4 for garbage with extra <.', function() {
			expect(utils.getEndOfGarbageIndex('<<<<>')).to.equal(4);
		});

		/**
		 * Example n°04: <{!>}>, because the first > is canceled.
		 */
		it('should return 5 for garbage \'<{!>}>\'.', function() {
			expect(utils.getEndOfGarbageIndex('<{!>}>')).to.equal(5);
		});

		/**
		 * Example n°05: <!!>, because the second ! is canceled, allowing the >
		 * to terminate the garbage.
		 */
		it('should return 3 for garbage \'<!!>\'.', function() {
			expect(utils.getEndOfGarbageIndex('<!!>')).to.equal(3);
		});

		/**
		 * Example n°06: <!!!>>, because the second ! and the first > are canceled.
		 */
		it('should return 5 for garbage \'<!!!>>\'.', function() {
			expect(utils.getEndOfGarbageIndex('<!!!>>')).to.equal(5);
		});

		/**
		 * Example n°07: <{o"i!a,<{i<a>, which ends at the first >
		 */
		it('should return 13 for garbage \'<{o"i!a,<{i<a>\'.', function() {
			expect(utils.getEndOfGarbageIndex('<{o"i!a,<{i<a>')).to.equal(13);
		});
	});
});
