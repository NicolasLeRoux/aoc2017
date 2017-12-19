/**
 * Method to find the index of the starting point.
 */
module.exports.findStartingPoint = function (matrix) {
	return matrix[0].indexOf('|');
};

/**
 * Methode to return the value in the matrix at a given position.
 */
module.exports.getAt = function (matrix, position) {
	let lign = matrix[position.y];

	return lign ? lign[position.x] : undefined;
};

/**
 * Method to get the next position in the maze.
 */
module.exports.getNextPosition = function (matrix, position) {
	return {
		x: 0,
		y: 0,
		dir: ''
	};
};
