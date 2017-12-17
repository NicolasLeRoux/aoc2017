/**
 * Method to calculate fewest number of steps required to reach the position.
 */
module.exports.calFewestSteps = function (x, y) {
	let xAbs = Math.abs(x),
		yAbs = Math.abs(y),
		rest = 0,
		result = 0;

	if (xAbs === yAbs) {
		result = xAbs;
	} else if (xAbs > yAbs) {
		rest = xAbs - yAbs;
		result = yAbs + rest / 2;
	} else {
		rest = yAbs - xAbs;
		result = xAbs + rest / 2;
	}

	return result;
}
