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
