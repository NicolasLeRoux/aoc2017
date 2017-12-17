/**
 * Mrthod to parse the communication pipe input
 *
 * Ex: '0 <-> 2, 3' return {id: 0, programs: [2, 3]}
 */
module.exports.parse = function (str) {
	var splitted = str.split(' <-> '),
		id = splitted[0],
		programs = splitted[1].split(', ');

	return {id, programs};
}
