import { expect } from 'chai';

import { Rot13Cipher } from '../src/index';

describe(`Test "Rot13Cipher"`, () => {
  const encrypter = new Rot13Cipher();
  let encrypted = '9uL qvq Gur puvpxrA pEBFF Gur EBnq?';
  let decrypted = 'Why did the chicken cross the road?';

  it('Check static "Rot13Cipher.encrypt"', () => {
    expect(encrypted).to.be.equal(Rot13Cipher.encrypt(decrypted));
  });

  it('Check static "Rot13Cipher.decrypt"', () => {
    expect(decrypted).to.be.equal(Rot13Cipher.decrypt(encrypted));
  });

  it('Check "Rot13Cipher.encrypt"', () => {
    expect(encrypted).to.be.equal(encrypter.encrypt(decrypted));
  });

  it('Check "Rot13Cipher.decrypt"', () => {
    expect(decrypted).to.be.equal(encrypter.decrypt(encrypted));
  });
});
