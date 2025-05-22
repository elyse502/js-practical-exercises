#!/usr/bin/node
// myMap
Array.prototype.myMap = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFn(this[i], i, this));
    }
    return result;
};

// myFilter
Array.prototype.myFilter = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// myReduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this);
    }
    return accumulator;
};

// myForEach
Array.prototype.myForEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i], i, this);
    }
};

// Example usage
const arr = [1, 2, 3, 4];

// myMap
console.log(arr.myMap(x => x * 2));

// myFilter
console.log(arr.myFilter(x => x % 2 === 0));

// myReduce
console.log(arr.myReduce((acc, x) => acc + x, 0));

// myForEach
arr.myForEach(x => console.log(x));

console.log();

// Example usage using regular function syntax instead of arrow functions
function double(x) {
    return x * 2;
}

function isEven(x) {
    return x % 2 === 0;
}

function sum(acc, x) {
    return acc + x;
}

function log(x) {
    console.log(x);
}

var array = [1, 2, 3, 4];

console.log(array.myMap(double));
console.log(array.myFilter(isEven));
console.log(array.myReduce(sum, 0));
arr.myForEach(log);
