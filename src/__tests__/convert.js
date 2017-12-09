import {
  unitedDimensionToUnitlessPixelValue,
  pxToRemOrEmValue,
  remOrEmToPxValue,
} from '../index';
import { genericInvalidValues, genericNumbers } from './data';

describe('pxToRemOrEmValue', () => {
  it('returns the correct value', () => {
    expect(pxToRemOrEmValue(16, 16)).toBe(1);
    expect(pxToRemOrEmValue(16, 10)).toBe(1.6);
    expect(pxToRemOrEmValue(10, 16)).toBe(0.625);
    expect(pxToRemOrEmValue(-16, 10)).toBe(-1.6);
  });
});

describe('remOrEmToPxValue', () => {
  it('returns the correct value', () => {
    expect(remOrEmToPxValue(1, 16)).toBe(16);
    expect(remOrEmToPxValue(2, 10)).toBe(20);
    expect(remOrEmToPxValue(0.8, 16)).toBe(12.8);
    expect(remOrEmToPxValue(-2, 10)).toBe(-20);
  });
});

describe('unitedDimensionToUnitlessPixelValue', () => {
  it('throws with invalid values', () => {
    for (const value of [...genericInvalidValues, ...genericNumbers]) {
      expect(() =>
        unitedDimensionToUnitlessPixelValue(value, 16)
      ).toThrowErrorMatchingSnapshot();
    }
  });

  it('converts valid united numbers to unitless pixel values', () => {
    expect(unitedDimensionToUnitlessPixelValue('16px', 16)).toEqual(16);
    expect(unitedDimensionToUnitlessPixelValue('1.6rem', 10)).toEqual(16);
    expect(unitedDimensionToUnitlessPixelValue('2em', 10)).toEqual(20);
  });
});
