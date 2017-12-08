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
