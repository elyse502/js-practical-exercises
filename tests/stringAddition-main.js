#!/usr/bin/node
const addStrings = require('../stringAddition').addStrings;

console.log(addStrings("Hello", "World"));     // "Hello World"
console.log(addStrings("Age", 30));            // "Age 30"
console.log(addStrings(100, "meters"));        // "100 meters"
console.log(addStrings(1, 2));                 // "1 2"
