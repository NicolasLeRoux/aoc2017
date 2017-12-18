const utils = require('./utils.js');

module.exports = function (array) {
	let node = utils.buildCircusTower(array),
		parentNode,
		childIndex;

	while (true) {
		let balances = node.childs.map(child => {
			return utils.calculBalance(child);
		});

		if (balances.length > 2) {
			let sorted= balances.slice()
					.sort((a, b) => a < b ? 1 : -1),
				index;

			if (sorted[0] !== sorted[1]) {
				index = balances.indexOf(sorted[0]);
			} else if (sorted[sorted.length - 2] !== sorted[sorted.length - 1]) {
				index = balances.indexOf(sorted[sorted.length - 1]);
			}

			if (index !== undefined) {
				parentNode = node;
				childIndex = index;
				node = parentNode.childs[index];
			} else break;
		} else {
			break;
		}
	}

	let incorrectBalance = utils.calculBalance(node),
		correctIndex = childIndex !== 0 ? 0 : 1,
		correctBalance = utils.calculBalance(parentNode.childs[correctIndex]),
		diff = correctBalance - incorrectBalance;

	if (node.childs.length !== 2) {
	} else {
		console.log(node.weight - diff);
	}

	return 0;
};
