"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AffineCipher {
    constructor(a, b) {
        this.ciphers = [];
        this.N = 48;
        this.M = 75;
        this.encrypt = (text) => {
            return text.split('')
                .map(c => this.ciphers[c.charCodeAt(0) - this.M] || ' ')
                .reduce((p, n) => p + n);
        };
        this.decrypt = (text) => {
            return text.split('')
                .map(c => this.decryptChar(c) || ' ')
                .reduce((p, n) => p + n);
        };
        this.decryptChar = (cipher) => {
            const index = this.ciphers.indexOf(cipher);
            return (index == -1) ? null : String.fromCharCode(index + this.M);
        };
        this.affine = (a, b) => {
            for (let i = this.N; i < this.M + this.N; i++) {
                const x = i - this.N;
                const x1 = a * x + b;
                const x2 = x1 % this.M;
                const cipher = String.fromCharCode(x2 + this.N);
                if (this.ciphers.indexOf(cipher) == -1) {
                    this.ciphers.push(cipher);
                }
                else {
                    throw Error(`The value of a has to be coprime with ${this.M}`);
                }
            }
        };
        this.affine(a, b);
    }
}
AffineCipher.suite = new AffineCipher(7, 10);
AffineCipher.encrypt = (text) => AffineCipher.suite.encrypt(text);
AffineCipher.decrypt = (text) => AffineCipher.suite.decrypt(text);
exports.AffineCipher = AffineCipher;
exports.default = AffineCipher;
