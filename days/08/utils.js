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
 * Find the the higher value in an object
 *
 * Ex: {a: 10, b: 20} will return 20.
 */
module.exports.max = function (obj) {
	let maxVal;

	Object.getOwnPropertyNames(obj).forEach(name => {
		if (maxVal === undefined || maxVal < obj[name]) maxVal = obj[name];
	});

	return maxVal;
};
