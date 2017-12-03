module.exports = function (mat) {
	return mat.reduce((acc, raw) => {
		raw.sort((a, b) => +a > +b ? -1 : 1);

		return acc + +raw[0] - +raw[raw.length - 1];
	}, 0);
}
