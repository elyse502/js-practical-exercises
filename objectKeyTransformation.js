exports.transformKeys = function (obj, transformFn) {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [transformFn(key), value])
    );
}
