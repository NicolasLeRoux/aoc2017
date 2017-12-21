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
	while (count < 1000) {
		let collisionPool = [];

		for (let i = 0; i < particules.length; i++) {
			let particule = utils.getNextState(particules[i]);

			particules.splice(i, 1, particule);
		}

		particules = particules.sort((partA, partB) => {
			let distA = utils.getDistanceFromOrigin(partA.pos),
				distB = utils.getDistanceFromOrigin(partB.pos);

			if (distA === distB && utils.isCollision(partA, partB)) {
				collisionPool.push(partA.name);
				collisionPool.push(partB.name);
			}

			return distA < distB ? -1 : 1;
		});

		particules = particules.filter(part => {
			return collisionPool.indexOf(part.name) === -1;
		});

		count++;
	}

	return particules.length;
};
