import { expect } from 'chai';

import { MorseCipher } from '../src/index';

describe(`Test "MorseCipher"`, () => {
  const encrypter = new MorseCipher();
  let encrypted = '.... . .-.. .-.. ---  .-- --- .-. .-.. -..';
  let decrypted = 'HELLO WORLD';

  it('Check "MorseCipher.encrypt"', () => {
    expect(encrypted).to.be.equal(encrypter.encrypt(decrypted));
  });

  it('Check "MorseCipher.decrypt"', () => {
    expect(decrypted).to.be.equal(encrypter.decrypt(encrypted));
  });
});
