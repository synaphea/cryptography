import { CaesarCipher } from './CaesarCipher';

export class Rot13Cipher {
  private static cipher = new CaesarCipher(13);

  public static encrypt = (text: string) => {
    return Rot13Cipher.cipher.encrypt(text);
  }

  public static decrypt = (text: string) => {
    return Rot13Cipher.cipher.decrypt(text);
  }

  public encrypt = (text: string) => {
    return Rot13Cipher.cipher.encrypt(text);
  }

  public decrypt = (text: string) => {
    return Rot13Cipher.cipher.decrypt(text);
  }
}

export default Rot13Cipher;
