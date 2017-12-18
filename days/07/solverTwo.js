const utils = require('./utils.js');

module.exports = function (array) {
	let struct = utils.buildCircusTower(array),
		childs = struct.childs;

	let tmp = childs.map(child => utils.calculBalance(child));
	console.log(tmp);

	return 0;
};
