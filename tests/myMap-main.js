#!/usr/bin/node
const myMap = require('../myMap').myMap;
const numbers = [1, 2, 3, 4, 5];

console.log(myMap(numbers, x => x * 2));
