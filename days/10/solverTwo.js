const utils = require('./utils.js');

module.exports = function (str) {
	let array = utils.toASCII(str),
		steps = utils.addStandardSuffix(array),
		currentPosition = 0,
		skipSize = 0,
		hashList = new Array(256)
			.fill(0)
			.map((val, i) => i);

	for (let j = 0; j <= 64; j++) {
		for (let i = 0; i < steps.length; i++) {
			let step = +steps[i],
				to = utils.circularAdd(currentPosition, step, hashList.length),
				subList = utils.circularSlice(hashList, currentPosition, to);

			if (step !== 0) {
				hashList = utils.circularReplace(hashList, subList.reverse(), currentPosition);
			}

			currentPosition = utils.circularAdd(currentPosition, step + skipSize, hashList.length);
			skipSize++;
		}
	}

	let denseHash = utils.reduceSparseHash(hashList);
	return utils.toHexa(denseHash);
};
