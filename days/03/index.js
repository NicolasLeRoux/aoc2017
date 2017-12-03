const fs = require('fs');
const path = require('path');
const solverOne = require('./solverOne.js');
const solverTwo = require('./solverTwo.js');

const txt = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8')
	.replace(/\n$/, '');

console.info('Answer part one: ', solverOne(txt));
console.info('Answer part two: ', solverTwo(txt));
