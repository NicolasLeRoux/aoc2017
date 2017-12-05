module.exports = function (array) {
	let index = 0,
		i = 0;

	while (array[index] !== undefined) {
		// Read offset
		let val = +array[index];

		// Jumps forward
		let newIndex = index + val;

		// Instruction increases by 1
		array[index] = val + 1;

		// Swap index
		index = newIndex;

		// Increases steps
		i++;
	};

	return i;
};
