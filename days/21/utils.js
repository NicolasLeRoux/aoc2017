/**
 * Method to parse the input of the day 21
 */
module.exports.parse = function (str) {
	var ruleStr = str.slice(0, str.indexOf(' ')),
		patternStr = str.slice(str.indexOf('=>') + 3);

	return {
		rule: toMatrix(ruleStr),
		pattern: toMatrix(patternStr)
	};
};

/**
 * Method to build a matrix for the pattern
 */
var toMatrix = module.exports.toMatrix = function (str) {
	var rows = str.split('/'),
		matrix = [];

	for (let i = 0; i < rows.length; i++) {
		matrix.push(rows[i].split(''));
	}

	return matrix;
};
