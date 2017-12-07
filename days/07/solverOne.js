module.exports = function (array) {
	let struct = {};

	// Parsing
	array.forEach(lign => {
		let name = lign.slice(0, lign.indexOf(' '));
		let weight = +lign.slice(lign.indexOf('(') + 1, lign.indexOf(')'));
		let childs;
		
		if (lign.indexOf('->') !== -1) {
			childs = lign.slice(lign.indexOf('->') + 3)
				.split(', ');
		}

		struct[name] = {
			name,
			weight,
			childs
		};
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

	return Object.getOwnPropertyNames(struct)[0];
};
