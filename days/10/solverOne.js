const utils = require('./utils.js');

module.exports = function (array) {
	var position = 0,
		hashList = new Array(256)
			.fill(0)
			.map((val, i) => i);

	for (let i = 0; i < array.length; i++) {
		let num = +array[i],
			subList = utils.circularSlice(hashList, position, num);

		hashList = utils.circularReplace(hashList, subList.reverse(), position);
		position = num + i;
	}

	return hashList[0] * hashList[1];
};
