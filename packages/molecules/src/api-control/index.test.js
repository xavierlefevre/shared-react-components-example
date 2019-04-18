import expectedPackage from './index.json';
import * as molecules from '..';

describe('molecules', () => {
  it('should match its previous export', () => {
    expect(Object.keys(molecules).sort()).toEqual(expectedPackage.sort());
  });
});
