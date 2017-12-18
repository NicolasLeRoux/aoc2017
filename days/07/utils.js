/**
 * The recursive circus parsing method.
 *
 * Ex: 'fwft (72) -> ktlj, cntj, xhth'
 */
module.exports.parse = function (str) {
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
