const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 20: Tools,', function() {
	describe('The method parse the input data aka \'parse\',', function() {
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

	describe('The method to get the next state of a particule aka \'getNextState\',', function() {
		/**
		 * Simple state on the X-axis
		 */
		it('should return the new state of a particule.', function () {
			let state = {
				pos: {
					x: 3,
					y: 0,
					z: 0
				},
				vel: {
					x: 2,
					y: 0,
					z: 0
				},
				acc: {
					x: -1,
					y: 0,
					z: 0
				}
			};

			expect(utils.getNextState(state)).to.eql({
				pos: {
					x: 4,
					y: 0,
					z: 0
				},
				vel: {
					x: 1,
					y: 0,
					z: 0
				},
				acc: {
					x: -1,
					y: 0,
					z: 0
				}
			});
		});

		/**
		 * Simple state on the X-axis with other data
		 */
		it('should return the new state of a particule with the same other data.', function () {
			let state = {
				name: 'Part021',
				weight: 21,
				pos: {
					x: 3,
					y: 0,
					z: 0
				},
				vel: {
					x: 2,
					y: 0,
					z: 0
				},
				acc: {
					x: -1,
					y: 0,
					z: 0
				}
			};

			expect(utils.getNextState(state)).to.eql({
				name: 'Part021',
				weight: 21,
				pos: {
					x: 4,
					y: 0,
					z: 0
				},
				vel: {
					x: 1,
					y: 0,
					z: 0
				},
				acc: {
					x: -1,
					y: 0,
					z: 0
				}
			});
		});
		/**
		 * Complexe state
		 */
		it('should return the new state of a particule.', function () {
			let state = {
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
			};

			expect(utils.getNextState(state)).to.eql({
				pos: {
					x: -1011,
					y: -918,
					z: -129
				},
				vel: {
					x: 16,
					y: 61,
					z: 59
				},
				acc: {
					x: 9,
					y: 1,
					z: -7
				}
			});
		});
	});

	describe('The method to calcul the distance from the origin aka \'getPositionFromOrigin\',', function() {
		/**
		 * Simple calcul of distance
		 */
		it('should return 3 for the position <1,1,1>.', function () {
			var pos = {
				x: 1,
				y: 1,
				z: 1
			};


			expect(utils.getPositionFromOrigin(pos)).to.eql(3);
		});

		/**
		 * Complexe calcul of distance
		 */
		it('should return 2058 for the position <1011,-918,-129>.', function () {
			var pos = {
				x: 1011,
				y: -918,
				z: -129
			};


			expect(utils.getPositionFromOrigin(pos)).to.eql(2058);
		});
	});
});
