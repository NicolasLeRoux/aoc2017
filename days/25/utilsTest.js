const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 25: Tools,', function() {
	describe('The method parse the blueprint aka \'parse\',', function() {
		/**
		 * Full blueprint
		 */
		it('should return the expected object for the given blueprint.', function() {
			var array = [
				'Begin in state A.\nPerform a diagnostic checksum after 6 steps.',
				'In state A:\n  If the current value is 0:\n    - Write the value 1.\n    - Move one slot to the right.\n    - Continue with state B.\n  If the current value is 1:\n    - Write the value 0.\n    - Move one slot to the left.\n    - Continue with state B.',
				'In state B:\n  If the current value is 0:\n    - Write the value 1.\n    - Move one slot to the left.\n    - Continue with state A.\n  If the current value is 1:\n    - Write the value 1.\n    - Move one slot to the right.\n    - Continue with state A.'
			];

			expect(utils.parse(array)).to.eql({
				initialState: 'A',
				nbStepsToPerform: 6,
				states: {
					A: {
						name: 'A',
						conditions: [
							{
								valueToWrite: 1,
								movingDirection: 'right',
								nextState: 'B'
							},
							{
								valueToWrite: 0,
								movingDirection: 'left',
								nextState: 'B'
							}
						]
					},
					B: {
						name: 'B',
						conditions: [
							{
								valueToWrite: 1,
								movingDirection: 'left',
								nextState: 'A'
							},
							{
								valueToWrite: 1,
								movingDirection: 'right',
								nextState: 'A'
							}
						]
					}
				}
			});
		});
	});

	describe('The method parse the head of the blueprint aka \'headParse\',', function() {
		/**
		 * Blueprint head
		 */
		it('should return the expected object for the given blueprint head.', function() {
			var str = 'Begin in state A.\nPerform a diagnostic checksum after 6 steps.';

			expect(utils.headParse(str)).to.eql({
				initialState: 'A',
				nbStepsToPerform: 6
			});
		});

		/**
		 * Blueprint head bis
		 */
		it('should return the expected object for the given blueprint head.', function() {
			var str = 'Begin in state D.\nPerform a diagnostic checksum after 2356 steps.';

			expect(utils.headParse(str)).to.eql({
				initialState: 'D',
				nbStepsToPerform: 2356
			});
		});
	});

	describe('The method parse a state of the blueprint aka \'stateParse\',', function() {
		/**
		 * Blueprint state
		 */
		it('should return the expected object for the given blueprint state.', function() {
			var str = 'In state A:\n  If the current value is 0:\n    - Write the value 1.\n    - Move one slot to the right.\n    - Continue with state B.\n  If the current value is 1:\n    - Write the value 0.\n    - Move one slot to the left.\n    - Continue with state B.';

			expect(utils.stateParse(str)).to.eql({
				name: 'A',
				conditions: [
					{
						valueToWrite: 1,
						movingDirection: 'right',
						nextState: 'B'
					},
					{
						valueToWrite: 0,
						movingDirection: 'left',
						nextState: 'B'
					}
				]
			});
		});
	});
});
