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
	let x = position.x,
		y = position.y,
		dir = position.dir,
		val = getAt(matrix, position);

	if (val === '+') {
		if (dir !== 'S' && getAt(matrix, {x, y: y - 1}) !== ' ') {
			y--;
			dir = 'N';
		} else if (dir !== 'W' && getAt(matrix, {x: x + 1, y}) !== ' ') {
			x++;
			dir = 'E';
		} else if (dir !== 'N' && getAt(matrix, {x, y: y + 1}) !== ' ') {
			y++;
			dir = 'S';
		} else if (dir !== 'E' && getAt(matrix, {x: x - 1, y}) !== ' ') {
			x--;
			dir = 'W';
		}
	} else if (val === ' ') {
		return undefined;
	} else {
		switch (position.dir) {
			case 'N':
				y--;
				break;
			case 'E':
				x++;
				break;
			case 'S':
				y++;
				break;
			case 'W':
				x--;
				break;
		}
	}

	return {x, y, dir};
};

/**
 * Method to serialize the path.
 */
module.exports.serializePath = function (matrix, position) {
	return [];
};
