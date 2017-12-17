const utils = require('./utils.js');

module.exports = function (array) {
	hashList = utils.knotHashList(256, array);

	return hashList[0] * hashList[1];
};
