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

/**
 * Method to compare two matrix
 */
module.exports.isEqualsMatrix = function (matA, matB) {
	var result = true;

	if (matA.length === matB.length && matA[0].length === matB[0].length) {
		loop: for (let i = 0; i < matA.length; i++) {
			for (let j = 0; j < matA[0].length; j++) {
				if (matA[i][j] !== matB[i][j]) {
					result = false;
					break loop;
				}
			}
		}
	} else {
		result = false;
	}

	return result;
};

/**
 * Method to generate the rule alternative
 */
module.exports.getRuleAlternative = function (matrix) {
};

/**
 * Method to split a matrix following the day 21 process
 */
module.exports.splitMatrix = function (matrix) {
	var size = matrix.length;

	if (size % 2 === 0) {
	} else {
	}

	return [];
};
