import {
  elementsOfUnitedNumber,
  numericPartOfUnitedNumber,
  unitPartOfUnitedNumber,
} from '../index';
import { genericInvalidValues, genericNumbers } from './data';

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
    expect(elementsOfUnitedNumber('32%')).toEqual([32, '%']);
  });
});

describe('numericPartOfUnitedNumber', () => {
  it("throws if the supplied value isn't a united number", () => {
    const invalidValues = [...genericInvalidValues, ...genericNumbers];

    for (const value of invalidValues) {
      expect(() =>
        numericPartOfUnitedNumber(value)
      ).toThrowErrorMatchingSnapshot();
    }
  });

  it('returns the numeric part of a united number', () => {
    expect(numericPartOfUnitedNumber('5px')).toEqual(5);
    expect(numericPartOfUnitedNumber('-55em')).toEqual(-55);
    expect(numericPartOfUnitedNumber('33.6rem')).toEqual(33.6);
  });
});

describe('unitPartOfUnitedNumber', () => {
  it("throws if the supplied value isn't a united number", () => {
    const invalidValues = [
      ...genericInvalidValues,
      ...genericNumbers,
      'xxem',
      'NaNem',
    ];
    for (const value of invalidValues) {
      expect(() =>
        unitPartOfUnitedNumber(value)
      ).toThrowErrorMatchingSnapshot();
    }
  });

  it('returns the numeric part of a united number', () => {
    expect(unitPartOfUnitedNumber('5px')).toEqual('px');
    expect(unitPartOfUnitedNumber('-55em')).toEqual('em');
    expect(unitPartOfUnitedNumber('33.6rem')).toEqual('rem');
  });
});

// unitPartOfUnitedNumber
