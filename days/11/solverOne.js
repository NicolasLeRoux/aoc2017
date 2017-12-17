module.exports = function (array) {
	var x = 0;
		y = 0;

	for (let i = 0; i < array.length; i++) {
		let dir = array[i];

		switch (dir) {
			case 'n':
				y = y - 2;
				break;
			case 'ne':
				x++;
				y--;
				break;
			case 'se':
				x++;
				y++;
				break;
			case 's':
				y = y + 2;
				break;
			case 'sw':
				x--;
				y++;
				break;
			case 'nw':
				x--;
				y--;
				break;
		}
	}

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
};
