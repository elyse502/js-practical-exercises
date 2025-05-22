exports.myForEach = function (array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        callbackFn(array[i], i, array);
    }
}
