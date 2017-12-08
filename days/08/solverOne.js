const utils = require('./utils.js');

module.exports = function (array) {
	let registers = {};

	array.forEach(instruction => {
		let {
			registerToModify,
			action,
			amount,
			registerToEvaluate,
			condition
		} = utils.parse(instruction);

		if (!registers[registerToModify]) registers[registerToModify] = 0;

		let evaluatedCond = eval(registers[registerToModify] + condition);
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
	});

	return 0;
};
