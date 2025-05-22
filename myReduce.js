exports.myReduce = function (array, callbackFn, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callbackFn(accumulator, array[i], i, array);
    }
    return accumulator;
}
