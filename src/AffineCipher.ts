import { Cipher } from './Cipher';

export class AffineCipher implements Cipher {
    private static suite = new AffineCipher(7, 10);
    private ciphers: Array<string> = [];

    private N = 48;
    private M = 75;

    constructor(a: number, b: number) {
        this.affine(a, b);
    }

    public static encrypt = 
        (text: string) => AffineCipher.suite.encrypt(text);

    public static decrypt = 
        (text: string) => AffineCipher.suite.decrypt(text);

    public encrypt = (text: string): string => {
        return text.split('')
            .map(c => this.ciphers[c.charCodeAt(0) - this.M] || ' ')
            .reduce((p, n) => p + n);
    }

    public decrypt = (text: string) => {
        return text.split('')
            .map(c => this.decryptChar(c) || ' ')
            .reduce((p, n) => p + n);
    }

    private decryptChar = (cipher: string) => {
        const index = this.ciphers.indexOf(cipher);
        return (index == -1) ? null : String.fromCharCode(index + this.M);
    }

    private affine = (a: number, b: number) => {
        for (let i = this.N; i < this.M + this.N; i++) {
            const x = i - this.N;
            const x1 = a * x + b;
            const x2 = x1 % this.M;

            const cipher = String.fromCharCode(x2 + this.N);
            if (this.ciphers.indexOf(cipher) == -1) {
                this.ciphers.push(cipher);
            } else {
                throw Error(`The value of a has to be coprime with ${this.M}`);
            }
        }
    }
}

export default AffineCipher;
