const utils = require('./utils.js');

module.exports = function (matrix) {
	let startingIndex = utils.findStartingPoint(matrix[0]);

	console.log(startingIndex);

	return '';
};
