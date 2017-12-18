const expect = require('expect.js');
const solve = require('./solverTwo.js');

describe.only('Day 7: Recursive Circus (Part two),', function() {
	/**
	 * Example n°01: In this example, the exit is 60.
	 */
	describe('Example n°01,', function() {
		it('should return 60 for the given input.', function() {
			var array = [
				'pbga (66)',
				'xhth (57)',
				'ebii (61)',
				'havc (66)',
				'ktlj (57)',
				'fwft (72) -> ktlj, cntj, xhth',
				'qoyq (66)',
				'padx (45) -> pbga, havc, qoyq',
				'tknk (41) -> ugml, padx, fwft',
				'jptl (61)',
				'ugml (68) -> gyxo, ebii, jptl',
				'gyxo (61)',
				'cntj (57)'
			];

			expect(solve(array)).to.equal(60);
		});
	});

	/**
	 * Others examples...
	 */
	describe('Others examples,', function() {
		it('should return 2 for the given input.', function() {
			var array = [
				'a (2)',
				'b (3)',
				'c (1) -> a, b',
				'd (1)',
				'e (1)',
				'f (1)',
				'g (2) -> d, e, f',
				'h (5)',
				'i (1) -> c, g, h'
			];

			expect(solve(array)).to.equal(2);
		});
	});
});

