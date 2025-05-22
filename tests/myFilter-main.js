#!/usr/bin/node
const myFilter = require('../myFilter').myFilter;

const numbers = [1, 2, 3, 4, 5];
console.log(myFilter(numbers, x => x % 2 === 0));
