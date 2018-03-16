export default class CaesarCipher {
  private static ref = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  constructor (private key: number, private customRef = CaesarCipher.ref) { }

  public static encrypt = (text: string, key: number) => {
    return CaesarCipher.shift(text, key);
  }

  public static decrypt = (text: string, key: number) => {
    return CaesarCipher.shift(text, -key);
  }

  private static shift = (text: string, shift: number, ref = CaesarCipher.ref) => {
    shift %= ref.length;
    if (shift < 0) { shift += ref.length; }

    return text.split('').map((cv) => {
      let loc = ref.indexOf(cv);
      return loc !== -1 ? ref.charAt(loc + shift < ref.length ? loc + shift : loc + shift - ref.length) : cv;
    }).join('');
  }

  public encrypt = (text: string) => {
    return CaesarCipher.shift(text, this.key, this.customRef);
  }

  public decrypt = (text: string) => {
    return CaesarCipher.shift(text, -this.key, this.customRef);
  }
}
