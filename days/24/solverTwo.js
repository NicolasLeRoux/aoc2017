const utils = require('./utils.js');

module.exports = function (array) {
	let components = [],
		bridges,
		maxStrength = 0,
		maxLength = 0;

	for (let i = 0; i < array.length; i++) {
		components.push(utils.parse(array[i]));
	}

	bridges = utils.buildAvailableBridge(0, components);

	for (let i = 0; i < bridges.length; i++) {
		let strength = utils.calculBridgeStrength(bridges[i]),
			length = bridges[i].length;

		if (length > maxLength || length === maxLength && strength > maxStrength) {
			maxStrength = strength;
			maxLength = length;
		}
	}

	return maxStrength;
};
