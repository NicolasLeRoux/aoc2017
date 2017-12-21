const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe('Day 20: Particle Swarm (Part two),', function() {
	/**
	 * Example n°01: Simple particule on the X-axis
	 */
	describe('Example n°01,', function() {
		it('should return 1 for the given input.', function() {
			var array = [
				'p=<-6,0,0>, v=< 3,0,0>, a=< 0,0,0>',
				'p=<-4,0,0>, v=< 2,0,0>, a=< 0,0,0>',
				'p=<-2,0,0>, v=< 1,0,0>, a=< 0,0,0>',
				'p=< 3,0,0>, v=<-1,0,0>, a=< 0,0,0>'
			];

			expect(solve(array)).to.equal(1);
		});
	});
});
