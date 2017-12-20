const expect = require('expect.js');
const utils = require('./utils.js');

describe.only('Day 20: Tools,', function() {
	describe('The method aka \'parse\',', function() {
		/**
		 * Simple particule
		 */
		it('should return a particle for the given input.', function() {
			var str = 'p=<-1027,-979,-188>, v=<7,60,66>, a=<9,1,-7>';

			expect(utils.parse(str)).to.eql({
				pos: {
					x: -1027,
					y: -979,
					z: -188
				},
				vel: {
					x: 7,
					y: 60,
					z: 66
				},
				acc: {
					x: 9,
					y: 1,
					z: -7
				}
			});
		});
	});
});

