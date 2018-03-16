import { expect } from 'chai';

import { CaesarCipher } from '../src/index';

describe(`Test "CaesarCipher"`, () => {
  const encrypter = new CaesarCipher(20);
  let encrypted = 'rovvy GyBvn';
  let decrypted = 'hello world';

  it('Check static "CaesarCipher.encrypt"', () => {
    expect(encrypted).to.be.equal(CaesarCipher.encrypt(decrypted, 10));
  });

  it('Check static "CaesarCipher.decrypt"', () => {
    expect(decrypted).to.be.equal(CaesarCipher.decrypt(encrypted, 10));
  });

  it('Check "CaesarCipher.encrypt"', () => {
    expect('ByFFI QILFx').to.be.equal(encrypter.encrypt(decrypted));
  });

  it('Check "CaesarCipher.decrypt"', () => {
    expect(decrypted).to.be.equal(encrypter.decrypt('ByFFI QILFx'));
  });
});
