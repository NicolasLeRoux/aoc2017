module.exports = function (array) {
	array = array.map(Number);
	let map = {},
		nbLoop = 0;

	while (nbLoop < 100000) {
		let max = array.slice()
				.sort((a, b) => a < b ? 1 : -1)[0],
			index = array.indexOf(max);

		array[index] = 0;

		for (let j = max; j > 0; j--) {
			if (index === array.length - 1) index = 0;
			else index++;

			array[index]++;
		}

		nbLoop++;

		let serialize = array.join('-');
		if (!map[serialize]) map[serialize] = 1;
		else break;
	}

	return nbLoop;
};
