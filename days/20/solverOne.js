const utils = require('./utils.js');

module.exports = function (array) {
	var particules = [];

	// Parsing
	for (let i = 0; i < array.length; i++) {
		let part = utils.parse(array[i]);
		part.name = i;

		particules.push(part);
	}

	// Moving particules
	let count = 0;
	while (count < 100) {
		for (let i = 0; i < particules.length; i++) {
			let particule = utils.getNextState(particules[i]);

			particules.splice(i, 1, particule);
		}

		count++;
	}

	return 0;
};
