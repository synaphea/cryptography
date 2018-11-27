"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaesarCipher {
    constructor(key, customRef = CaesarCipher.ref) {
        this.key = key;
        this.customRef = customRef;
        this.encrypt = (text) => {
            return CaesarCipher.shift(text, this.key, this.customRef);
        };
        this.decrypt = (text) => {
            return CaesarCipher.shift(text, -this.key, this.customRef);
        };
    }
}
CaesarCipher.ref = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
CaesarCipher.encrypt = (text, key) => {
    return CaesarCipher.shift(text, key);
};
CaesarCipher.decrypt = (text, key) => {
    return CaesarCipher.shift(text, -key);
};
CaesarCipher.shift = (text, shift, ref = CaesarCipher.ref) => {
    shift %= ref.length;
    if (shift < 0) {
        shift += ref.length;
    }
    return text.split('').map((cv) => {
        let loc = ref.indexOf(cv);
        return loc !== -1 ? ref.charAt(loc + shift < ref.length ? loc + shift : loc + shift - ref.length) : cv;
    }).join('');
};
exports.CaesarCipher = CaesarCipher;
exports.default = CaesarCipher;
