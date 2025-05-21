exports.sortProducts = function (products) {
    return products.sort((a, b) => a.price - b.price);
}
