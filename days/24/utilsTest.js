const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 24: Tools,', function() {
	describe('The method to parse the input data aka \'parse\',', function() {
		/**
		 * Component 0/2
		 */
		it('should return [0, 2] for the input 0/2.', function() {
			var str = '0/2';

			expect(utils.parse(str)).to.eql([0, 2]);
		});

		/**
		 * Component 10/5
		 */
		it('should return [10, 5] for the input 10/5.', function() {
			var str = '10/5';

			expect(utils.parse(str)).to.eql([10, 5]);
		});
	});

	describe('The method to build all the available bridge aka \'buildAllAvailableBridge\',', function() {
		/**
		 * Very small components set
		 */
		it('should return the coorect list for the given input.', function() {
			var array = [
				'0/2',
				'2/2',
				'2/3',
				'2/4',
				'2/5'
			];

			expect(utils.buildAllAvailableBridge(array)).to.eql([
				[[0, 2], [2, 2], [2, 3]],
				[[0, 2], [2, 2], [2, 4]],
				[[0, 2], [2, 2], [2, 5]]
			]);
		});
	});

	describe('The method to calcul the strength of a bridge aka \'calculBridgeStrength\',', function() {
		/**
		 * Weak bridge
		 */
		it('should return 6 for the given bridge.', function() {
			var bridge = [
				[0, 2], [2, 2]
			];

			expect(utils.calculBridgeStrength(bridge)).to.equal(6);
		});

		/**
		 * Simple bridge
		 */
		it('should return 31 for the given bridge.', function() {
			var bridge = [
				[0, 1], [1, 10], [10, 9]
			];

			expect(utils.calculBridgeStrength(bridge)).to.equal(31);
		});
	});

	describe('The method to get the components that match the given one aka \'getMatchingComponents\',', function() {
		/**
		 * Stating component
		 */
		it('should return all components that can be a starting one.', function() {
			var components = [
				[0, 2],
				[2, 2],
				[3, 2],
				[0, 4]
			];

			expect(utils.getMatchingComponents([0, 0], components)).to.eql([
				[0, 2],
				[0, 4]
			]);
		});
		/**
		 * Simple set
		 */
		it('should return the components that can be used with the component 2/3.', function() {
			var components = [
				[0, 2],
				[2, 2],
				[3, 2],
				[5, 4]
			];

			expect(utils.getMatchingComponents([2, 3], components)).to.eql([
				[0, 2],
				[2, 2],
				[3, 2]
			]);
		});
	});
});
