const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 12: Tools,', function() {
	describe('The method aka \'parse\',', function() {
		/**
		 * Input with one program
		 */
		it('should correctly parse for the given input \'0 <-> 2\'.', function() {
			expect(utils.parse('0 <-> 2')).to.eql({
				id: '0',
				programs: ['2']
			});
		});

		/**
		 * Input with multiple programs
		 */
		it('should correctly parse for the given input \'1 <-> 4, 5\'.', function() {
			expect(utils.parse('1 <-> 4, 5')).to.eql({
				id: '1',
				programs: ['4', '5']
			});
		});
	});
});
