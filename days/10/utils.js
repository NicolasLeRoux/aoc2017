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

/**
 * Method to convert a string in an array of ASCII.
 */
module.exports.toASCII = function (str) {
	return str.split('')
		.map(char => char.charCodeAt(0));
};

/**
 * Method to add the standard length suffix values.
 */
module.exports.addStandardSuffix = function (array) {
	return array.slice()
		.concat([17, 31, 73, 47, 23]);
};

/**
 * Méthod to reduce a sparse hash into a dense hash
 */
module.exports.reduceSparseHash = function (array) {
	var result = [],
		nbLoop = array.length / 16;

	for (let i = 0; i < nbLoop; i++) {
		let range = 16 * i,
			block = array.slice(range, range + 16),
			denseHash = block.reduce((acc, val) => acc ^= val);

		result.push(denseHash);
	}
	
	return result;
};

/**
 * Method to convert an array into a hexadecimal string.
 */
module.exports.toHexa = function (array) {
	var result = '';

	array.forEach(item => {
		let hexa = item.toString(16);

		result += hexa.length === 2 ? hexa : '0' + hexa;
	});

	return result;
};
