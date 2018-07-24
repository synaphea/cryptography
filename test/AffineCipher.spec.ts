import { expect } from 'chai';

import { AffineCipher } from '../src/index';

describe(`Test "AffineCipher"`, () => {
  const encrypter = new AffineCipher(5, 8);
  let encrypted = 'rovvy GyBvn';
  let decrypted = 'hello world';

//   it('Check static "AffineCipher.encrypt"', () => {
//     expect(encrypted).to.be.equal(AffineCipher.encrypt(decrypted, 10));
//   });

//   it('Check static "AffineCipher.decrypt"', () => {
//     expect(decrypted).to.be.equal(AffineCipher.decrypt(encrypted, 10));
//   });

  it('Check "AffineCipher.encrypt"', () => {
    expect('ByFFI QILFx').to.be.equal(encrypter.encrypt(decrypted));
  });

  it('Check "AffineCipher.decrypt"', () => {
    expect(decrypted).to.be.equal(encrypter.decrypt('ByFFI QILFx'));
  });
});
