const utils = require('./utils.js');

module.exports = function (array) {
	let struct = utils.buildCircusTower(array);

	return struct.name;
};
