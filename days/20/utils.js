/**
 * Method to parse the string input into a particule
 */
module.exports.parse = function (str) {
	let startPosIndex = str.indexOf('<') + 1,
		endPosIndex = str.indexOf('>'),
		startVelIndex = str.indexOf('<', endPosIndex) + 1,
		endVelIndex = str.indexOf('>', endPosIndex + 1),
		startAccIndex = str.indexOf('<', startVelIndex) + 1,
		endAccIndex = str.indexOf('>', endVelIndex + 1),
		posStr = str.slice(startPosIndex, endPosIndex),
		position = posStr.split(',').map(Number),
		velStr = str.slice(startVelIndex, endVelIndex),
		velocity = velStr.split(',').map(Number),
		accStr = str.slice(startAccIndex, endAccIndex),
		acceleration = accStr.split(',').map(Number);

	return {
		pos: {
			x: position[0],
			y: position[1],
			z: position[2]
		},
		vel: {
			x: velocity[0],
			y: velocity[1],
			z: velocity[2]
		},
		acc: {
			x: acceleration[0],
			y: acceleration[1],
			z: acceleration[2]
		}
	};
};

/**
 * Method to get the next state of the particule
 */
module.exports.getNextState = function (state) {
	let newVelX = state.vel.x + state.acc.x,
		newVelY = state.vel.y + state.acc.y,
		newVelZ = state.vel.z + state.acc.z;


	return Object.assign(state, {
		pos: {
			x: state.pos.x + newVelX,
			y: state.pos.y + newVelY,
			z: state.pos.z + newVelZ
		},
		vel: {
			x: newVelX,
			y: newVelY,
			z: newVelZ
		},
	});
};

/**
 * Method to calcul the Manhattan distance from the position <0, 0, 0>
 */
module.exports.getPositionFromOrigin = function (position) {
	return Math.abs(position.x)
		+ Math.abs(position.y)
		+ Math.abs(position.z);
};
