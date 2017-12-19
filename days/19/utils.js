/**
 * Method to find the index of the starting point.
 */
module.exports.findStartingPoint = function (matrix) {
	return matrix[0].indexOf('|');
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
