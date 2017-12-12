/**
 * Method to do a circular slice 
 */
module.exports.circularSlice = function (array, from, to) {
	return from <= to ? array.slice(from, to) :
		array.slice(from).concat(array.slice(0, to));
};

/**
 * TODO
 */
module.exports.circularReplace = function (array, elms, from) {
	return 0;
};
