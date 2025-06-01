#!/usr/bin/node
const compressString = require('../stringCompression').compressString;

console.log(compressString("AAAABBBCCDAA")); // "A4B3C2D1A2"
console.log(compressString("XYZ"));          // "X1Y1Z1"
console.log(compressString("A"));            // "A1"
console.log(compressString(""));             // ""
