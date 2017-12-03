module.exports = function (input) {
	return input.split('')
		.reduce((acc, current, index, array) => {
			let next = array[index + 1] || array[0]; // Make it circular

			return (current === next ? +current : 0) + acc;
		}, 0);
};
