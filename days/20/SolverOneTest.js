const expect = require('expect.js');
const solve = require('./solverOne.js');

describe('Day 20: Particle Swarm (Part one),', function() {
	/**
	 * Example n°01: Simple particule on the X-axis
	 */
	describe('Example n°01,', function() {
		it('should return 0 for the given input.', function() {
			var array = [
				'p=< 3,0,0>, v=< 2,0,0>, a=<-1,0,0>',
				'p=< 4,0,0>, v=< 0,0,0>, a=<-2,0,0>'
			];

			expect(solve(array)).to.equal(0);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Example n°01,', function() {
		it('should return 2 for the given input.', function() {
			var array = [
				'p=<0,0,0>, v=<0,0,0>, a=<-2,0,0>',
				'p=<0,0,0>, v=<0,0,0>, a=<-2,2,0>',
				'p=<0,0,0>, v=<0,0,0>, a=<0,0,1>',
				'p=<0,0,0>, v=<0,0,0>, a=<-2,3,0>'
			];

			expect(solve(array)).to.equal(2);
		});
	});
});
