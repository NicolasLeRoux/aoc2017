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
};
