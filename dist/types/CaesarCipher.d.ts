export default class CaesarCipher {
    private static ref;
    encrypt: (text: string, key: number) => string;
    decrypt: (text: string, key: number) => string;
    private shift;
}
