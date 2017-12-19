/**
 * Method to find the index of the starting point.
 */
var findStartingPoint = module.exports.findStartingPoint = function (matrix) {
	return matrix[0].indexOf('|');
};

/**
 * Method to get the initial position
 */
module.exports.getInitialPosition = function (matrix) {
	return {
		x: findStartingPoint(matrix),
		y: 0,
		dir: 'S'
	};
};

/**
 * Methode to return the value in the matrix at a given position.
 */
var getAt = module.exports.getAt = function (matrix, position) {
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
