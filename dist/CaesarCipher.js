"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaesarCipher {
    constructor() {
        this.encrypt = (text, key) => {
            return this.shift(text, key);
        };
        this.decrypt = (text, key) => {
            return this.shift(text, -key);
        };
        this.shift = (text, shift) => {
            shift %= CaesarCipher.ref.length;
            if (shift < 0) {
                shift += CaesarCipher.ref.length;
            }
            return text.split('').map((cv) => {
                let loc = CaesarCipher.ref.indexOf(cv);
                return loc !== -1 ? CaesarCipher.ref.charAt(loc + shift < CaesarCipher.ref.length ? loc + shift : loc + shift - CaesarCipher.ref.length) : cv;
            }).join('');
        };
    }
}
CaesarCipher.ref = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
exports.default = CaesarCipher;
