const utils = require('./utils.js');

module.exports = function (matrix) {
	let position = utils.getInitialPosition(matrix),
		path = utils.serializePath(matrix, position);

	return path.length;
};
