/**
 * Method to parse the input of the day 21
 */
module.exports.parse = function () {
	return 0;
};

/**
 * Method to build a matrix for the pattern
 */
module.exports.toMatrix = function (str) {
	var rows = str.split('/'),
		matrix = [];

	for (let i = 0; i < rows.length; i++) {
		matrix.push(rows[i].split(''));
	}

	return matrix;
};
