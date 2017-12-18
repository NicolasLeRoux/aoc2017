const utils = require('./utils.js');

module.exports = function (array) {
	let struct = utils.buildCircusTower(array);

	console.log(struct);
	return 0;
};
