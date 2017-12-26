/**
 * Method to parse the components data
 */
module.exports.parse = function (str) {
	return str.split('/')
		.map(Number);
};

/**
 * Method to build the available bridge
 */
var buildAvailableBridge = module.exports.buildAvailableBridge = function (port, components) {
	let bridges = [],
		subSet = getMatchingComponents(port, components);

	if (subSet.length) {
		for (let i = 0; i < subSet.length; i++) {
			let component = subSet[i],
				availablePort = getAvailablePort(port, component),
				cptsCopy = components.slice(),
				subBridges;

			// Remove current component
			cptsCopy.splice(components.indexOf(component), 1);

			subBridges = buildAvailableBridge(availablePort, cptsCopy);

			if (subBridges.length) {
				for (let j = 0; j < subBridges.length; j++) {
					bridges.push([component].concat(subBridges[j]));
				}
			} else {
				bridges.push([component]);
			}
		}
	}

	return bridges;
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
 * Method to get the components that match the given port
 */
var getMatchingComponents = module.exports.getMatchingComponents = function (port, set) {
	return set.filter(item => {
		return item.includes(port);
	});
};

/**
 * Method to get the available port for a component
 */
var getAvailablePort = module.exports.getAvailablePort = function (port, component) {
	let availablePortIndex = component.indexOf(port) === 0 ? 1 : 0;

	return component[availablePortIndex];
};
