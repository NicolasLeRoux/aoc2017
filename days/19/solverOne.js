const utils = require('./utils.js');

module.exports = function (matrix) {
	let position = utils.getInitialPosition(matrix),
		path = utils.serializePath(matrix, position),
		exp = /[A-Z]/;

	return path.filter(val => exp.test(val))
		.join('');
};
