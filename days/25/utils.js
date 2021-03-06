/**
 * Method to parse the blueprint
 */
module.exports.parse = function (array) {
	let head = headParse(array[0]),
		states = {};

	for (let i = 1; i < array.length; i++) {
		let lign = array[i],
			state = stateParse(lign);

		states[state.name] = state;
	}

	return Object.assign({}, head, {states});
};

/**
 * Method to parse the head of the blueprint
 */
var headParse = module.exports.headParse = function (str) {
	let initialState = str.slice(str.indexOf('state') + 6, str.indexOf('.')),
		nbStepsToPerform = +str.slice(str.indexOf('after') + 6, str.indexOf('steps'));

	return {initialState, nbStepsToPerform};
};

/**
 * Method to parse a state of the blueprint
 */
var stateParse = module.exports.stateParse = function (str) {
	let array = str.split(/\n/),
		nameLine = array[0],
		name = nameLine.slice(nameLine.indexOf('state') + 6, nameLine.indexOf(':')),
		conditions = [];

	for (i = 0; i < 2; i++) {
		let index = i * 4 + 1,
			valueLine = array[index + 1],
			valueToWrite = +valueLine.slice(valueLine.indexOf('value') + 6, valueLine.indexOf('.')),
			moveLine = array[index + 2],
			movingDirection = moveLine.slice(moveLine.indexOf('to the') + 7, moveLine.indexOf('.')),
			nextStateLine = array[index + 3],
			nextState = nextStateLine.slice(nextStateLine.indexOf('state') + 6, nextStateLine.indexOf('.'));

		conditions.push({valueToWrite, movingDirection, nextState});
	}


	return {name, conditions};
};

/**
 * Method to calcul the diagnostic checksum
 */
module.exports.calculChecksum = function (tape) {
	var acc = 0;

	for (var prop in tape) {
		if (tape[prop] === 1) acc++;
	}

	return acc;
}
