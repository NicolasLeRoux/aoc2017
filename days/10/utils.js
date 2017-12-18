/**
 * Method to do a circular slice
 */
var circularSlice = module.exports.circularSlice = function (array, from, to) {
	let cirFrom = from % array.length,
		cirTo = to % array.length;

	return cirFrom < cirTo ? array.slice(cirFrom, cirTo) :
		array.slice(cirFrom).concat(array.slice(0, cirTo));
};

/**
 * Methode to do a circular replace
 */
var circularReplace = module.exports.circularReplace = function (array, elms, from) {
	var result = array.slice(),
		aLength = array.length,
		eLength = elms.length;

	if (eLength + from < aLength) {
		result.splice(from, eLength, ...elms);
	} else {
		let circularFrom = from % aLength,
			rightLength = aLength - circularFrom,
			leftLength = eLength - rightLength;

		result.splice(circularFrom, rightLength, ...elms.slice(0, rightLength));
		result.splice(0, leftLength, ...elms.slice(rightLength));
	}

	return result;
};

/**
 * Method to do a circular addition
 */
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

		if (step !== 0) {
			hashList = circularReplace(hashList, subList.reverse(), currentPosition);
		}

		currentPosition = circularAdd(currentPosition, step + i, hashList.length);
	}

	return hashList;
};
