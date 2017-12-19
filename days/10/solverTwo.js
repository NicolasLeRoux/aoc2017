const utils = require('./utils.js');

module.exports = function (str) {
	let array = utils.toASCII(str);
	array = utils.addStandardSuffix(array);

	let hashList = utils.knotHashList(256, array);
	// 64 rounds

	let denseHash = utils.reduceSparseHash(hashList);

	// ToHexa

	return '';
};
