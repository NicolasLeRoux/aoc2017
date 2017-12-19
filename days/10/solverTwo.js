const utils = require('./utils.js');

module.exports = function (str) {
	let array = utils.toASCII(str);
	array = utils.addStandardSuffix(array);

	console.log(array);

	// 64 rounds

	//let denseHash = utils.reduceSparseHash();

	return '';
};
