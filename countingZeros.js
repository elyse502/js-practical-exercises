exports.countZeros = function (n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        const str = i.toString();
        for (let ch of str) {
            if (ch === '0') count++;
        }
    }

    return count;
}
