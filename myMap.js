exports.myMap = function (array, callbackFn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callbackFn(array[i], i, array));
    }
    return result;
}
