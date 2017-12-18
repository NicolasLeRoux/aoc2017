const utils = require('./utils.js');

module.exports = function (array) {
	var map = utils.buildLayersMap(array),
		max = utils.findHighestKey(map),
		delay = 0;

	main: while (delay < 100000000000000) {
		for (let i = 0; i <= max; i++) {
			let picosecond = i + delay,
				range = map[i];

			if (range !== undefined) { // We got a security layer
				let scannerPosition = utils.getScannedPosition(range, picosecond);
				if (scannerPosition === 0) {
					delay++;
					continue main;
				}
			}
		}

		break;
	}

	return delay;
};
