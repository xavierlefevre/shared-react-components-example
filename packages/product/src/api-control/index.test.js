import * as fundsheet from '..';
import expectedPackage from './index.json';

describe('fundsheet', () => {
  it('should match its previous export', () => {
    expect(Object.keys(fundsheet).sort()).toEqual(expectedPackage.sort());
  });
});
