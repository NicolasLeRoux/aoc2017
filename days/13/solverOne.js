const utils = require('./utils.js');

module.exports = function (array) {
	var map = utils.buildLayersMap(array),
		max = utils.findHighestKey(map),
		nbLoop = max * 2,
		depth = -1,
		severity = 0;

	for (let i = 0; i <= nbLoop; i++) {
		let range = map[depth];
		console.log({i, range, depth});

		if (range !== undefined) { // We got a security layer
			let scannerPosition = i % range;

			if (scannerPosition === 0) {
				severity += range * depth;
			}
		}
	}

	console.log({severity});

	return 0;
};
