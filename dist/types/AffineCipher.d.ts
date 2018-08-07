import { Cipher } from './Cipher';
export declare class AffineCipher implements Cipher {
    private ciphers;
    private N;
    private M;
    constructor(a: number, b: number);
    static encrypt: (text: string) => string;
    static decrypt: (text: string) => string;
    encrypt: (text: string) => string;
    decrypt: (text: string) => string;
    private decryptChar;
    private affine;
}
export default AffineCipher;
