export declare class CaesarCipher {
    private key;
    private customRef;
    private static ref;
    constructor(key: number, customRef?: string);
    static encrypt: (text: string, key: number) => string;
    static decrypt: (text: string, key: number) => string;
    private static shift;
    encrypt: (text: string) => string;
    decrypt: (text: string) => string;
}
export default CaesarCipher;
