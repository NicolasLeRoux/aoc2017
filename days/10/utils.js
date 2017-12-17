/**
 * Method to do a circular slice
 */
var circularSlice = module.exports.circularSlice = function (array, from, to) {
	return from < to ? array.slice(from, to) :
		array.slice(from).concat(array.slice(0, to));
};

/**
 * Methode to do a circular replace
 */
var circularReplace = module.exports.circularReplace = function (array, elms, from) {
	var result = array.slice();

	if (elms.length + from <= array.length) {
		result.splice(from, elms.length, ...elms);
	} else {
		let rightLength = array.length - from,
			leftLength = elms.length - rightLength;

		result.splice(from, rightLength, ...elms.slice(0, rightLength));
		result.splice(0, leftLength, ...elms.slice(rightLength));
	}

	return result;
};

var circularAdd = module.exports.circularAdd = function (val1, val2, size) {
	var sum = val1 + val2;
	return sum < size ? sum : sum % size;
};

/**
 * Method to knot a hash list following the given steps
 */
module.exports.knotHashList = function (hashSize, steps) {
		var currentPosition = 0,
			hashList = new Array(hashSize)
				.fill(0)
				.map((val, i) => i);

	for (let i = 0; i < steps.length; i++) {
		let step = +steps[i],
			to = circularAdd(currentPosition, step, hashList.length),
			subList = circularSlice(hashList, currentPosition, to);

		hashList = circularReplace(hashList, subList.reverse(), currentPosition);
		currentPosition = circularAdd(currentPosition, step + i, hashList.length);
	}

	return hashList;
};
