/**
 * Method to do a circular slice 
 */
var circularSlice = module.exports.circularSlice = function (array, from, to) {
	return from <= to ? array.slice(from, to) :
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

/**
 * TODO
 */
module.exports.knottedHashList = function (hashSize, steps) {
		var position = 0,
			hashList = new Array(hashSize)
				.fill(0)
				.map((val, i) => i);

	for (let i = 0; i < steps.length; i++) {
		let num = +steps[i],
			tmp = position + num < hashSize ? position + num : num - hashSize;
			subList = circularSlice(hashList, position, tmp);

		hashList = circularReplace(hashList, subList.reverse(), position);
		position = num + i;

		console.log(position, tmp, subList, hashList);
	}

	return hashList;
};
