"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CaesarCipher_1 = require("./CaesarCipher");
class Rot13Cipher {
    constructor() {
        this.encrypt = (text) => {
            return Rot13Cipher.cipher.encrypt(text);
        };
        this.decrypt = (text) => {
            return Rot13Cipher.cipher.decrypt(text);
        };
    }
}
Rot13Cipher.cipher = new CaesarCipher_1.CaesarCipher(13);
Rot13Cipher.encrypt = (text) => {
    return Rot13Cipher.cipher.encrypt(text);
};
Rot13Cipher.decrypt = (text) => {
    return Rot13Cipher.cipher.decrypt(text);
};
exports.Rot13Cipher = Rot13Cipher;
exports.default = Rot13Cipher;
