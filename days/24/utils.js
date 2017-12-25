/**
 * Method to parse the components data
 */
module.exports.parse = function (str) {
	return str.split('/');
};

/**
 * Method to build all the available bridge
 */
module.exports.buildAllAvailableBridge = function () {
	return [];
};

/**
 * Method to calcul the strength of a given bridge
 */
module.exports.calculBridgeStrength = function (bridge) {
	return bridge.reduce((acc, val) => {
		return acc + val[0] + val[1];
	}, 0);
};

/**
 * Method to get the components that match the given one
 */
module.exports.getMatchingComponents = function (component, set) {
	return set.filter(item => {
		return item.includes(component[0]) || item.includes(component[1]);
	});
};
