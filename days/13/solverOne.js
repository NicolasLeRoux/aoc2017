const utils = require('./utils.js');

module.exports = function (array) {
	var map = utils.buildLayersMap(array),
		max = utils.findHighestKey(map);

	console.log({map, max});
};
