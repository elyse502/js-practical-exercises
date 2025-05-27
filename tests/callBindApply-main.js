#!/usr/bin/node
const {
    getAreaWithFixedWidth,
    getMaxFromArray,
    capitalizeWithCall,
    getDiscountedPrice,
    convertArrayLikeToArray
} = require('../callBindApply');

// Test each
console.log(getAreaWithFixedWidth(5)); // 50
console.log(getMaxFromArray([34, 12, 57, 28, 91])); // 91
console.log(capitalizeWithCall("john")); // John
console.log(getDiscountedPrice(100)); // 90
console.log(convertArrayLikeToArray({ 0: 'a', 1: 'b', 2: 'c', length: 3 })); // ['a', 'b', 'c']
