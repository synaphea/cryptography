import { Cipher } from './Cipher';

export class RunningKeyCipher implements Cipher {

  constructor (private runningKey: string) {

  }

  public static encrypt = (text: string) => {
    throw Error('Is not supported!');
  }

  public static decrypt = (text: string) => {
    throw Error('Is not supported!');
  }

  public encrypt = (text: string) => {
    if (text.length > this.runningKey.length) {
      throw Error('Running key should be at least as long as plaintext');
    }

    return text.toUpperCase()
      .split('')
      .map((c, index) => {
        const sum_key_plaintext = (this.runningKey[index].charCodeAt(0) - 64) + (c.charCodeAt(0) - 64);
        if (sum_key_plaintext > 27) {
          return String.fromCharCode(sum_key_plaintext - 26 - 1 + 64);
        }
        return String.fromCharCode(sum_key_plaintext - 1 + 64);
      })
      .reduce((p, n) => p + n);
  }

  public decrypt = (text: string) => {
    return text.toUpperCase();
  }
}

export default RunningKeyCipher;
