const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 25: Tools,', function() {
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
	});
});
