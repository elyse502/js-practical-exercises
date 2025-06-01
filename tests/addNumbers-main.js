#!/usr/bin/node
const calculateExpression = require('../addNumbers').calculateExpression;

console.log(calculateExpression("5 + 4 * 3 / 2 - 1")); // ➤ 10
console.log(calculateExpression("( 2 + 3 ) * ( 4 - 1 )")); // ➤ 15
console.log(calculateExpression("( 2 - 3 ) * ( 4 + 6 ) / ( 3 + 2 )")); // ➤ -2
