/**
 * Method to build a map of layers from the firewall data
 */
module.exports.buildLayersMap = function (array) {
	var map = {};

	for (let i = 0; i < array.length; i++) {
		let data = array[i].split(': '),
			layer = data[0],
			range = data[1];

		map[layer] = range;
	}

	return map;
};

/**
 * Method to find the highest key in an object
 */
module.exports.findHighestKey = function (obj) {
	return +Object.keys(obj)
		.sort((a, b) => +a < +b ? 1 : -1)
		[0];
};

/**
 * Method to get the scanner position with the range and the picosecond
 */
module.exports.getScannedPosition = function (range, picosecond) {
	let loop = 2 * range - 2,
		remainer = picosecond % loop;

	return remainer < range ? remainer : loop - remainer;
};
