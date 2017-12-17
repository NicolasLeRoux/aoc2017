const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 13: Tools,', function() {
	describe('The method to build a map of layers aka \'buildLayersMap\',', function() {
		/**
		 * Simple input
		 */
		it('should return the correct map for the given input.', function() {
			var array = [
				'0: 3',
				'1: 2',
				'4: 4',
				'6: 4'
			];

			expect(utils.buildLayersMap(array)).to.eql({
				'0': '3',
				'1': '2',
				'4': '4',
				'6': '4'
			});
		});
	});

	describe('The method to find the highest key in an object aka \'findHighestKey\',', function() {
		/**
		 * Simple input
		 */
		it('should return 10 for the input {10: 1, 2: 1}.', function() {
			expect(utils.findHighestKey({
				'10': 1,
				'2': 1
			})).to.equal(10);
		});

		/**
		 * Mixed input
		 */
		it('should return 21 for the input {10: 1, 21: 1, 4: 1}.', function() {
			expect(utils.findHighestKey({
				'10': 1,
				'21': 1,
				'4': 1
			})).to.equal(21);
		});
	});

	describe('The method to get the scanner position aka \'getScannedPosition\',', function() {
		/**
		 * Initial position
		 */
		it('should return 0 for the range 5 and picosecond 0.', function() {
			expect(utils.getScannedPosition(5, 0)).to.equal(0);
		});

		/**
		 * Simple position
		 */
		it('should return 4 for the range 5 and picosecond 4.', function() {
			expect(utils.getScannedPosition(5, 4)).to.equal(4);
		});

		/**
		 * Way back
		 */
		it('should return 1 for the range 5 and picosecond 7.', function() {
			expect(utils.getScannedPosition(5, 7)).to.equal(1);
		});

		/**
		 * Second round
		 */
		it('should return 2 for the range 5 and picosecond 10.', function() {
			expect(utils.getScannedPosition(5, 10)).to.equal(2);
		});
	});
});
