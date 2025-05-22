#!/usr/bin/node
const myReduce = require('../myReduce').myReduce;

const numbers = [1, 2, 3, 4, 5];
console.log(myReduce(numbers, (acc, x) => acc + x, 0));
