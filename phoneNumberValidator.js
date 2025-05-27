exports.validatePhoneNumber = (phone) => {
    let digits = "";
    let validSeparators = [3, 7]; // expected positions for separators if any

    for (let i = 0, j = 0; i < phone.length; i++) {
        const char = phone[i];
        if (char >= "0" && char <= "9") {
            digits += char;
            j++;
        } else if (char === " " || char === "-") {
            if (!validSeparators.includes(i)) {
                return false; // separator not in a valid position
            }
        } else {
            return false; // invalid character
        }
    }

    return digits.length === 10;
}
