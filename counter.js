exports.createCounter = function () {
    let count = 0;
    return function counterFn() {
        count += 1;
        return count;
    };
}
