function getElementAt (array, x, y) {
	return array.filter(item => {
			return item.x === x &&
				item.y === y;
		})[0];
};

function sumSurrondingElementOf (array, x, y) {
	let sum = 0;

	for (let i = x - 1; i <= x + 1; i++) {
		for (let j = y - 1; j <= y + 1; j++) {
			if (isElementPresent(array, i, j)) {
				let elm = getElementAt(array, i, j);

				sum += elm.val;
			}
		}
	}

	return sum;
};

function isElementPresent (array, x, y) {
	return array.filter(item => {
			return item.x === x &&
				item.y === y;
		}).length;
};

function isNextMoveUp (array) {
	let last = array[array.length - 1];

	return isElementPresent(array, last.x - 1, last.y) &&
		!isElementPresent(array, last.x, last.y - 1);
};

function isNextMoveDown (array) {
	let last = array[array.length - 1];

	return isElementPresent(array, last.x + 1, last.y) &&
		!isElementPresent(array, last.x, last.y + 1);
};

function isNextMoveLeft (array) {
	let last = array[array.length - 1];

	return isElementPresent(array, last.x, last.y + 1) &&
		!isElementPresent(array, last.x - 1, last.y);
};

function isNextMoveRight (array) {
	let last = array[array.length - 1];

	return isElementPresent(array, last.x, last.y - 1) &&
		!isElementPresent(array, last.x + 1, last.y);
};

module.exports = function (string) {
	let array = [
			{
				val: 1,
				id: 1,
				x: 0,
				y: 0
			}
		],
		i = 1,
		step = 0,
		value = 0;

	while (value <= +string) {
		let prev = array[i - 1],
			nextX = prev.x,
			nextY = prev.y;

		if (isNextMoveRight(array) || array.length === 1) { // Go right
			nextX = prev.x + 1;
		} else if (isNextMoveUp(array)) { // Go up
			nextY = prev.y - 1;
		} else if (isNextMoveLeft(array)) { // Go left
			nextX = prev.x - 1;
		} else if (isNextMoveDown(array)) { // Go down
			nextY = prev.y + 1;
		}

		value = sumSurrondingElementOf(array, nextX, nextY);
		array.push({
			val: value,
			id: i + 1,
			x: nextX,
			y: nextY
		});
		i++;
	}

	return value;
};
