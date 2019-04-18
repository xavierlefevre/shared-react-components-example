import expectedPackage from './expected-api.json';
import * as atoms from '..';

describe('atoms', () => {
  it('should match its previous export', () => {
    expect(Object.keys(atoms).sort()).toEqual(expectedPackage.sort());
  });
});
