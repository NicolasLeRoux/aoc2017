module.exports = function (str) {
	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		// Canceled characters must be skipped
		if (char === '!') continue;

		if (char === '<') {
			// TODO
		}
	}

	return 0;
};
