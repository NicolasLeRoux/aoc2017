const fs = require('fs');
const path = require('path');
const solver = require('./solver.js');

const txt = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8')
	.replace(/\n$/, '');

const raws = txt.split(/\n/);
const matrix = [];
raws.forEach((raw, index) => {
	matrix[index] = raw.split(/\t/);
});

console.info('Answer: ', solver(matrix));
