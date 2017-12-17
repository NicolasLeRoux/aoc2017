const utils = require('./utils.js');

module.exports = function (array) {
	var x = 0,
		y = 0,
		max = 0;

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

		let dist = utils.calFewestSteps(x, y);
		if (dist > max) {
			max = dist;
		}
	}

	return max;
};
