const utils = require('./utils.js');

module.exports = function (array) {
	var map = {},
		groups = {};

	for (let i = 0; i < array.length; i++) {
		let item = utils.parse(array[i]);

		if (item.programs.indexOf(item.id) === -1) item.programs.push(item.id);
		map[item.id] = item.programs;
	}

	let j = 0;
	while (Object.keys(map).length !== 0) {
		let key = Object.keys(map)[0],
			i = 0,
			programs = map[key];

		groups[key] = programs;

		while (i < programs.length) {
			let child = programs[i],
				subPrograms = map[child];

			for (let j = 0; j < subPrograms.length; j++) {
				let prog = subPrograms[j];

				if (programs.indexOf(prog) === -1) programs.push(prog);
			}

			delete map[child];
			i++;
		}
	}

	return Object.keys(groups).length;
}
