const utils = require('./utils.js');

module.exports = function (array) {
	var map = {};

	for (let i = 0; i < array.length; i++) {
		let item = utils.parse(array[i]);

		map[item.id] = item.programs;
	}

	let i = 1,
		programs = ['0'].concat(map['0']);
	while (i < programs.length) {
		let child = programs[i],
			subPrograms = map[child];

		for (let j = 0; j < subPrograms.length; j++) {
			let prog = subPrograms[j];

			if (programs.indexOf(prog) === -1) programs.push(prog);
		}

		i++;
	}

	return programs.length;
}
