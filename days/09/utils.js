/**
 * The method to find the index of the end of the garbage
 */
module.exports.getEndOfGarbageIndex = function (str) {
	var i;
	for (i = 0; i < str.length; i++) {
		let char = str[i];

		if (char === '!') {
			i++;
			continue;
		}

		if (char === '>') break;
	}

	return i;
};
