/**
 * The jump instruction parsing method.
 *
 * Ex: 'q inc -159 if uix >= -1265'
 */
module.exports.parse = function (str) {
	let registerToModify, action, amount, registerToEvaluate, condition;

	let array = str.split(' ');

	registerToModify = array[0];
	action = array[1];
	amount = +array[2];
	registerToEvaluate = array[4];
	condition = array[5] + array[6];

	return {
		registerToModify,
		action,
		amount,
		registerToEvaluate,
		condition
	};
};

/**
 * Find the key with the higher value
 *
 * Ex: {a: 10, b: 20} will return b.
 */
module.exports.findKeyWithHigherValue = function (obj) {
	let maxName, maxVal;

	Object.getOwnPropertyNames(obj).forEach(name => {
		if (maxVal === undefined || maxVal < obj[name]) {
			maxVal = obj[name];
			maxName = name;
		}
	});

	return maxName;
};
