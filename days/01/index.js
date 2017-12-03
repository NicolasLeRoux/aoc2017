const fs = require('fs');
const path = require('path');
const solve = require('./solver.js');

console.info('-- Day 1: Inverse Captcha --');

const txt = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'UTF-8')
	.replace(/\n$/, '');

console.info('Answer: ', solve(txt));
