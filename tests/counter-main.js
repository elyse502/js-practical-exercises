#!/usr/bin/node
const createCounter = require('../counter').createCounter;
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
