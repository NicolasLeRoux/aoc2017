const utils = require('./utils.js');

module.exports = function (array) {
	let registers = {},
		maxHeld;

	array.forEach(instruction => {
		let {
			registerToModify,
			action,
			amount,
			registerToEvaluate,
			condition
		} = utils.parse(instruction);

		if (!registers[registerToModify]) registers[registerToModify] = 0;
		if (!registers[registerToEvaluate]) registers[registerToEvaluate] = 0;

		let evaluatedCond = eval(registers[registerToEvaluate] + condition);
		if (evaluatedCond) {
			switch (action) {
				case 'inc':
					registers[registerToModify] += amount;
					break;
				case 'dec':
					registers[registerToModify] -= amount;
					break;
				default:
					console.error('Unknown action...');
			}
		}

		if (!maxHeld || registers[registerToModify] > maxHeld) maxHeld = registers[registerToModify];
	});

	return maxHeld;
};
