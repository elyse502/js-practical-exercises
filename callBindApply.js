// a. Rectangle Area using bind
function getAreaWithFixedWidth(height) {
    function calculateArea(width, height) {
        return width * height;
    }
    const areaWithWidth10 = calculateArea.bind(null, 10);
    return areaWithWidth10(height);
}

// b. Max using apply
function getMaxFromArray(numbers) {
    return Math.max.apply(null, numbers);
}

// c. Capitalize with call
function capitalizeWithCall(str) {
    function capitalize() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return capitalize.call(str);
}

// d. Discount using bind
function getDiscountedPrice(price) {
    function applyDiscount(discount, price) {
        return price - (price * discount / 100);
    }
    const tenPercentDiscount = applyDiscount.bind(null, 10);
    return tenPercentDiscount(price);
}

// e. Convert array-like object to array using apply
function convertArrayLikeToArray(arrayLikeObj) {
    return Array.prototype.slice.apply(arrayLikeObj);
}

// Export all functions
module.exports = {
    getAreaWithFixedWidth,
    getMaxFromArray,
    capitalizeWithCall,
    getDiscountedPrice,
    convertArrayLikeToArray
};
