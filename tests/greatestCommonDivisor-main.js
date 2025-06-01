#!/usr/bin/node
const gcd = require('../greatestCommonDivisor').gcd;

console.log(gcd(48, 18)); // Output: 6
console.log(gcd(101, 10)); // Output: 1
console.log(gcd(0, 30));   // Output: 30
console.log(gcd(-15, 5));  // Output: 5
