#!/usr/bin/node

// a. Rectangle Area using bind
function calculateArea(width, height) {
    return width * height;
}

// Bind width to 10
const areaWithFixedWidth = calculateArea.bind(null, 10);

console.log(areaWithFixedWidth(5));


// b. Find Max using apply
const numbers = [34, 12, 57, 28, 91];
const max = Math.max.apply(null, numbers);

console.log(max);


// c. Capitalize using call
function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const name = capitalize.call("john");

console.log(name);


// d. Discount Price using bind
function applyDiscount(discount, price) {
    return price - (price * discount / 100);
}

// Bind discount to 10%
const tenPercentDiscount = applyDiscount.bind(null, 10);

console.log(tenPercentDiscount(50));
console.log(tenPercentDiscount(100));


// e. Convert Array-like Object using apply
function toArray() {
    return Array.prototype.slice.apply(arguments);
}

// Simulate array-like object
const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// Convert using call with slice
const realArray = Array.prototype.slice.apply(arrayLikeObject);

console.log(realArray); // ['a', 'b', 'c']
