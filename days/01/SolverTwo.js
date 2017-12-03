module.exports = function (input) {
	let half = input.length / 2;

	return input.split('')
		.reduce((acc, current, index, array) => {
			let next = array[index + half] || array[index - half]; // Make it circular

			return (current === next ? +current : 0) + acc;
		}, 0);
};
