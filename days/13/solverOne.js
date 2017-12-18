const utils = require('./utils.js');

module.exports = function (array) {
	var map = utils.buildLayersMap(array),
		max = utils.findHighestKey(map),
		severity = 0;

	for (let i = 0; i <= max; i++) {
		let range = map[i];

		if (range !== undefined) { // We got a security layer
			let scannerPosition = utils.getScannedPosition(range, i);

			if (scannerPosition === 0) {
				severity += range * i;
			}
		}
	}

	return severity;
};
