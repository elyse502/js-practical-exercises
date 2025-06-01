exports.reverseInPlace = function (sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}
