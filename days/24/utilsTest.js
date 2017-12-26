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

	describe('The method to build the available bridge aka \'buildAvailableBridge\',', function() {
		/**
		 * Only one bridge level
		 */
		it('should return the correct list for the given input.', function() {
			var array = [
				[0, 2],
				[1, 0]
			];

			expect(utils.buildAvailableBridge(0, array)).to.eql([
				[[0, 2]],
				[[1, 0]]
			]);
		});

		/**
		 * A two level bridge
		 */
		it('should return the correct list for the given input.', function() {
			var array = [
				[0, 2],
				[2, 3],
				[1, 0],
				[4, 1],
				[1, 5]
			];

			expect(utils.buildAvailableBridge(0, array)).to.eql([
				[[0, 2], [2, 3]],
				[[1, 0], [4, 1]],
				[[1, 0], [1, 5]]
			]);
		});

		/**
		 * Multiple level bridge with a small components set
		 */
		it('should return the correct list for the given input.', function() {
			var array = [
				[0, 2],
				[2, 2],
				[2, 3],
				[2, 4],
				[2, 5],
				[1, 0]
			];

			expect(utils.buildAvailableBridge(0, array)).to.eql([
				[[0, 2], [2, 2], [2, 3]],
				[[0, 2], [2, 2], [2, 4]],
				[[0, 2], [2, 2], [2, 5]],
				[[0, 2], [2, 3]],
				[[0, 2], [2, 4]],
				[[0, 2], [2, 5]],
				[[1, 0]]
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

	describe('The method to get the components that match the given port aka \'getMatchingComponents\',', function() {
		/**
		 * Starting port
		 */
		it('should return all components that can be a starting one.', function() {
			var components = [
				[0, 2],
				[2, 2],
				[3, 2],
				[0, 4]
			];

			expect(utils.getMatchingComponents(0, components)).to.eql([
				[0, 2],
				[0, 4]
			]);
		});

		/**
		 * Another port
		 */
		it('should return the components that can be used with the port 2.', function() {
			var components = [
				[0, 2],
				[2, 2],
				[3, 2],
				[5, 4]
			];

			expect(utils.getMatchingComponents(2, components)).to.eql([
				[0, 2],
				[2, 2],
				[3, 2]
			]);
		});

		/**
		 * No match
		 */
		it('should return no components that can be used with the port 8.', function() {
			var components = [
				[0, 2],
				[2, 2],
				[3, 2],
				[5, 4]
			];

			expect(utils.getMatchingComponents(8, components)).to.eql([]);
		});
	});

	describe('The method to get the available port for a component aka \'getAvailablePort\',', function() {
		/**
		 * Component [0, 1]
		 */
		it('should return 1 for the port 0 and the component [0, 1].', function() {
			expect(utils.getAvailablePort(0, [0, 1])).to.eql(1);
		});

		/**
		 * Component [9, 6]
		 */
		it('should return 6 for the port 9 and the component [9, 6].', function() {
			expect(utils.getAvailablePort(9, [9, 6])).to.eql(6);
		});
	});
});
