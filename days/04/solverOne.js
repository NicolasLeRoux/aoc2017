module.exports = function (array) {
	let count = 0;

	array.forEach(phrase => {
		let words = phrase.split(' '),
			isValidFlag = true,
			map = {};

		for (let i = 0; i < words.length; i++) {
			let word = words[i];

			if (!map[word]) {
				map[word] = 1;
			} else {
				map[word]++;
				isValidFlag = false;
				break;
			}
		};

		if (isValidFlag) count++;
	});

	return count;
};
