/**
 * Method to parse the blueprint
 */
module.exports.parse = function (array) {
};

/**
 * Method to parse the head of the blueprint
 */
module.exports.headParse = function (str) {
	let initialState = str.slice(str.indexOf('state') + 6, str.indexOf('.')),
		nbStepsToPerform = +str.slice(str.indexOf('after') + 6, str.indexOf('steps'));

	return {initialState, nbStepsToPerform};
};

/**
 * Method to parse a state of the blueprint
 */
module.exports.stateParse = function (str) {
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
