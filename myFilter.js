exports.myFilter = function (array, callbackFn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
