import { elementsOfUnitedNumber } from '../parse';
import { genericInvalidValues } from './data';

describe('elementsOfUnitedNumber', () => {
  it("throws if the value isn't a number followed by a unit", () => {
    for (const value of genericInvalidValues()) {
      expect(() =>
        elementsOfUnitedNumber(value)
      ).toThrowErrorMatchingSnapshot();
    }
  });

  it('returns the separate numeric and unit parts', () => {
    expect(elementsOfUnitedNumber('5px')).toEqual([5, 'px']);
    expect(elementsOfUnitedNumber('-10rem')).toEqual([-10, 'rem']);
    expect(elementsOfUnitedNumber('0em')).toEqual([0, 'em']);
  });
});
