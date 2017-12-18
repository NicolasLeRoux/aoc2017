/**
 * The recursive circus parsing method.
 *
 * Ex: 'fwft (72) -> ktlj, cntj, xhth'
 */
var parse = module.exports.parse = function (str) {
	let name = str.slice(0, str.indexOf(' ')),
		weight = +str.slice(str.indexOf('(') + 1, str.indexOf(')')),
		childs = [];
		
	if (str.indexOf('->') !== -1) {
		childs = str.slice(str.indexOf('->') + 3)
			.split(', ');
	}

	return {
		name,
		weight,
		childs
	};
};

/**
 * Method to build a circus tower
 */
module.exports.buildCircusTower = function (array) {
	let struct = {};

	// Parsing
	array.forEach(lign => {
		let obj = parse(lign);

		struct[obj.name] = obj;
	});

	let toRm = [];
	for (let key in struct) {
		let elm = struct[key];

		if (elm.childs) {
			let tmp = [];

			elm.childs.forEach(childName => {
				tmp.push(struct[childName]);
				toRm.push(childName);
			});

			elm.childs = tmp;
		}
	}

	for (let i = 0; i < toRm.length; i++) {
		delete struct[toRm[i]];
	}

	return Object.values(struct)[0];
};

/**
 * Method to calcul the balance of a node
 */
var calculBalance = module.exports.calculBalance = function (node) {
	var balance = node.weight;

	if (node.childs.length !== 0) {
		var array = node.childs.forEach(child => {
			balance += calculBalance(child);
		});
	}

	return balance;
};
