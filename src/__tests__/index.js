import {
  appendUnit,
  unitIsRemOrEm,
  pxToRemOrEmValue,
  remOrEmToPxValue,
  elementsOfUnitedNumber,
  unitedDimensionToUnitlessPixelValue,
} from '../index';

// const validRemValues = ['0rem', '-5rem', '-5.5rem', '5rem', '5.5rem'];
// const validEmValues = ['0em', '-5em', '-5.5em', '5em', '5.5em'];

describe('appendUnit', () => {
  it('appends the supplied unit', () => {
    expect(appendUnit(10, 'px')).toEqual('10px');
  });
});

describe('unitIsRemOrEm', () => {
  for (const value of ['em', 'rem']) {
    it(`returns true when value supplied is '${value}'`, () => {
      expect(unitIsRemOrEm(value)).toBeTruthy();
    });
  }

  for (const value of [
    5,
    '5',
    'px',
    '',
    null,
    {},
    undefined,
    [],
    true,
    false,
    NaN,
  ]) {
    it(`returns false when the value suppleid is '${value}'`, () => {
      expect(unitIsRemOrEm(value)).toBeFalsy();
    });
  }
});

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

describe('elementsOfUnitedNumber', () => {
  for (const value of [
    5,
    '5',
    'px',
    'px10',
    '',
    null,
    {},
    undefined,
    [],
    true,
    false,
    NaN,
  ]) {
    it("throws if the value isn't in the form {number}{unit}", () => {
      expect(() =>
        elementsOfUnitedNumber(value)
      ).toThrowErrorMatchingSnapshot();
    });
  }

  it('returns the separate numeric and unit parts', () => {
    expect(elementsOfUnitedNumber('5px')).toEqual([5, 'px']);
    expect(elementsOfUnitedNumber('-10rem')).toEqual([-10, 'rem']);
    expect(elementsOfUnitedNumber('0em')).toEqual([0, 'em']);
  });
});

describe('unitedDimensionToUnitlessPixelValue', () => {
  expect(unitedDimensionToUnitlessPixelValue('16px', 16)).toEqual(16);
  expect(unitedDimensionToUnitlessPixelValue('1.6rem', 10)).toEqual(16);
  expect(unitedDimensionToUnitlessPixelValue('2em', 10)).toEqual(20);
});
