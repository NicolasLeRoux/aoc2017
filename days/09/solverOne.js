const utils = require('./utils.js');

module.exports = function (str) {
	var count = 0,
		result = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		switch (char) {
			case '<':
				i += utils.getEndOfGarbageIndex(str.slice(i));
				break;
			case '{':
				count++;
				result += count;
				break;
			case '}':
				count--;
				break;
		}
	}

	return result;
};
