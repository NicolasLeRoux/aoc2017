module.exports = function (array) {
	let structure = {};

	array.forEach(lign => {
		let desc, childs, name, weight;

		if (lign.indexOf(' -> ') !== -1) {
			let splitted = lign.split(' -> ');

			desc = splitted[0]; 
			childs = splitted[1].split(', ');
		} else {
			desc = lign;
		}

		let tmp = desc.split(' ');
		name = tmp[0];
		weight = tmp[1].slice(1, tmp[1].length - 1);

		let obj = {
			name,
			weight
		};
		if (childs) obj.childsName = childs;

		structure[obj.name] = obj;
	});

	console.log(structure);
	return 0;
};
