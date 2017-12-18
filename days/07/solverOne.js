const utils = require('./utils.js');

module.exports = function (array) {
	let struct = {};

	// Parsing
	array.forEach(lign => {
		let obj = utils.parse(lign);

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

	return Object.getOwnPropertyNames(struct)[0];
};
