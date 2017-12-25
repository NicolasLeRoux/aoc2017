const utils = require('./utils.js');

module.exports = function (array) {
	let tape = [],
		index = 0,
		count = 0,
		blueprint = utils.parse(array),
		stateToRun = blueprint.initialState;

	while (count < blueprint.nbStepsToPerform) {
		let state = blueprint.states[stateToRun],
			currentValue = tape[index] === 1 ? 1 : 0,
			condition = state.conditions[currentValue];

		// Write new value in tape
		tape[index] = condition.valueToWrite;
		// Move according to condition
		if (condition.movingDirection === 'right') index++;
		else if (condition.movingDirection === 'left') index--;
		// Set next state
		stateToRun = condition.nextState;

		count++;
	}

	return utils.calculChecksum(tape);
};
