export interface Cipher {
    encrypt(text: string): string;
    decrypt(text: string): string;
}