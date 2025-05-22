#!/usr/bin/node
const myForEach = require('../myForEach').myForEach;

const numbers = [1, 2, 3, 4, 5];
myForEach(numbers, x => console.log(x));
