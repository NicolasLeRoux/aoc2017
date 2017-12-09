const expect = require('expect.js');
const utils = require('./utils.js');

describe('Day 8: Tools,', function() {
	describe('The jump instruction parsing method aka \'parse\',', function() {
		it('should return \'b\' as registerToModify for the input \'b inc 5 if a > 1\'.', function() {
			expect(utils.parse('b inc 5 if a > 1').registerToModify).to.equal('b');
		});

		it('should return \'abc\' as registerToModify for the input \'abc inc 5 if a > 1\'.', function() {
			expect(utils.parse('abc inc 5 if a > 1').registerToModify).to.equal('abc');
		});

		it('should return \'inc\' as action for the input \'b inc 5 if a > 1\'.', function() {
			expect(utils.parse('b inc 5 if a > 1').action).to.equal('inc');
		});

		it('should return \'dec\' as action for the input \'b dec 5 if a > 1\'.', function() {
			expect(utils.parse('b dec 5 if a > 1').action).to.equal('dec');
		});

		it('should return 5 as amount for the input \'b inc 5 if a > 1\'.', function() {
			expect(utils.parse('b inc 5 if a > 1').amount).to.equal(5);
		});

		it('should return 100 as amount for the input \'b inc 100 if a > 1\'.', function() {
			expect(utils.parse('b inc 100 if a > 1').amount).to.equal(100);
		});

		it('should return \'b\' as registerToEvaluate for the input \'b inc 100 if a > 1\'.', function() {
			expect(utils.parse('b inc 100 if a > 1').registerToEvaluate).to.equal('a');
		});

		it('should return \'abc\' as registerToEvaluate for the input \'b inc 100 if abc > 1\'.', function() {
			expect(utils.parse('b inc 100 if abc > 1').registerToEvaluate).to.equal('abc');
		});

		it('should return \'>1\' as condition for the input \'b inc 100 if a > 1\'.', function() {
			expect(utils.parse('b inc 100 if a > 1').condition).to.equal('>1');
		});

		it('should return \'!=20\' as condition for the input \'b inc 100 if a != 20\'.', function() {
			expect(utils.parse('b inc 100 if a != 20').condition).to.equal('!=20');
		});
	});

	describe('The method to find the higher value aka \'max\',', function() {
		it('should return 20 as for the given input.', function() {
			let obj = {
				a: 10,
				b: 20
			};

			expect(utils.max(obj)).to.equal(20);
		});

		it('should return 22 as for the given input.', function() {
			let obj = {
				a: 10,
				b: -20,
				abc: 22
			};

			expect(utils.max(obj)).to.equal(22);
		});
	});
});


