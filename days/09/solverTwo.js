const utils = require('./utils.js');

module.exports = function (str) {
	var result = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (char === '<') {
			let offset = utils.getEndOfGarbageIndex(str.slice(i));

			for (let j = i + 1; j < i + offset; j++) {
				if (str[j] === '!') {
					j++;
				} else {
					result++;
				}
			}

			i += offset;
		}
	}

	return result;
}
