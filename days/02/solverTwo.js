module.exports = function (mat) {
	return mat.reduce((acc, raw) => {
		raw.sort((a, b) => +a > +b ? -1 : 1);

		for (let i = 0; i < raw.length; i++) {
			for (let j = raw.length; j > 0; j--) {
				if (raw[i] !== raw[j] && raw[i] % raw[j] === 0) {
					return acc + raw[i] / raw[j];
				}
			}
		}

		return acc; // Didn't find a number...
	}, 0);
};
