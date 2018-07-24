import { Cipher } from './Cipher';

export class AffineCipher implements Cipher {

    constructor(a: number, b: number) {
        this.affine(a, b);
    }

    public static encrypt = (text: string) => {
        return '';
    }

    public static decrypt = (text: string) => {
        return '';
    }

    public encrypt = (text: string) => {
        return '';
    }

    public decrypt = (text: string) => {
        return '';
    }

    private affine = (a: number, b: number) => {
        const n = 48;
        for (let i = 0; i < 75; i++) {
            console.log(String.fromCharCode(n + i), String.fromCharCode(((a * i + b) % 75) + n));
        }
        // print(chr(i+65) + ": " + chr(((a*i+b)%26)+65))
    }
}

export default AffineCipher;
