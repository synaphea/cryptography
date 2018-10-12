import { expect } from 'chai';

import { RunningKeyCipher } from '../src/index';

describe(`Test "RunningKeyCipher"`, () => {
  let runningKey = '';
  let encrypted = 'KSBHBHLALIDMVGKYZKYAHXUAAWGM';
  let decrypted = 'DEFENDTHEEASTWALLOFTHECASTLE';

  it('Check static "RunningKeyCipher.encrypt"', () => {
    expect(RunningKeyCipher.encrypt.bind(decrypted)).to.throw('Is not supported!');
  });

  it('Check static "RunningKeyCipher.decrypt"', () => {
    expect(RunningKeyCipher.decrypt.bind(decrypted)).to.throw('Is not supported!');
  });

  it('Small running key', () => {
    const encrypter = new RunningKeyCipher('');
    expect(encrypter.encrypt.bind(encrypter, decrypted)).to.throw('Running key should be at least as long as plaintext');
  });

  it('Check "RunningKeyCipher.encrypt"', () => {
    const encrypter = new RunningKeyCipher('HOWDOESTHEDUCKKNOWTHATSAIDVI');
    expect(encrypted).to.be.equal(encrypter.encrypt(decrypted));
  });

  it('Check "RunningKeyCipher.decrypt"', () => {
    const encrypter = new RunningKeyCipher('HOWDOESTHEDUCKKNOWTHATSAIDVI');
    expect(decrypted).to.be.equal(encrypter.decrypt(encrypted));
  });
});
