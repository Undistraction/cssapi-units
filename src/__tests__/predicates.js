import {
  genericInvalidValues,
  validNumbersWithAllUnits,
  validNumbersWithUnit,
  numbersWithUnitNotIncluding,
  invalidNumbers,
  positiveNumbers,
  negativeNumbers,
  genericNumbers,
  validRatioStrings,
  invalidRatioStrings,
} from './data';
import {
  isValidNumber,
  isValidPositiveNumber,
  isUnitRemOrEm,
  isNumberWithUnit,
  isNumberWithPx,
  isNumberWithEm,
  isNumberWithRem,
  isNumberWithDpi,
  isNumberWithPercent,
  isAspectRatioString,
} from '../predicates';

// const toTitle = compose(join(''), over(lensIndex(0), toUpper));

describe('predicates', () => {
  describe('isValidNumber', () => {
    for (const value of invalidNumbers()) {
      it(`returns false if the value supplied is not a valid ${value}`, () => {
        expect(isValidNumber(value)).toBeFalsy();
      });
    }
    it('returns true if the value supplied is a valid number', () => {
      for (const value of genericNumbers()) {
        expect(isValidNumber(value)).toBeTruthy();
      }
    });
  });

  describe('isValidPositiveNumber', () => {
    for (const value of [invalidNumbers(), ...negativeNumbers(), 0]) {
      it(`returns false if the value supplied is not a valid ${value}`, () => {
        expect(isValidPositiveNumber(value)).toBeFalsy();
      });
    }
    it('returns true if the value supplied is a valid number', () => {
      for (const value of positiveNumbers()) {
        expect(isValidPositiveNumber(value)).toBeTruthy();
      }
    });
  });

  describe('isNumberWithUnit', () => {
    const unitsToTestFor = ['px', 'rem', 'em', 'dpi', '%'];

    it('returns false for invalid values', () => {
      for (const value of [...genericInvalidValues(), '5xx']) {
        expect(isNumberWithUnit(unitsToTestFor, value)).toBeFalsy();
      }
    });

    it('returns true for numbers with units', () => {
      for (const value of validNumbersWithAllUnits()) {
        expect(isNumberWithUnit(unitsToTestFor, value)).toBeTruthy();
      }
    });
  });

  describe('isAspectRatioString', () => {
    it('returns false when the supplied value is not ratio string', () => {
      for (const value of invalidRatioStrings()) {
        expect(isAspectRatioString(value)).toBeFalsy();
      }
    });
    it('returns true when the supplied value is a ratio string', () => {
      for (const value of validRatioStrings()) {
        expect(isAspectRatioString(value)).toBeTruthy();
      }
    });
  });

  for (const funcData of [
    ['isNumberWithPx', isNumberWithPx, 'px'],
    ['isNumberWithEm', isNumberWithEm, 'em'],
    ['isNumberWithRem', isNumberWithRem, 'rem'],
    ['isNumberWitDpi', isNumberWithDpi, 'dpi'],
    ['isNumberWitPercent', isNumberWithPercent, '%'],
  ]) {
    const [funcName, func, unit] = funcData;

    const invalidValues = [
      ...genericInvalidValues(),
      ...numbersWithUnitNotIncluding(unit),
    ];

    describe(funcName, () => {
      it('returns false for invalid values', () => {
        for (const value of invalidValues) {
          expect(func(value)).toBeFalsy();
        }
      });

      it('returns true for numbers with units', () => {
        for (const value of validNumbersWithUnit(unit)) {
          expect(func(value)).toBeTruthy();
        }
      });
    });
  }

  describe('isUnitRemOrEm', () => {
    it('returns true when value supplied is a rem or em', () => {
      for (const value of ['em', 'rem']) {
        expect(isUnitRemOrEm(value)).toBeTruthy();
      }
    });
    it('returns false when the value supplied is not a rem or em', () => {
      for (const value of [
        ...genericInvalidValues,
        ...validNumbersWithUnit('px'),
      ]) {
        expect(isUnitRemOrEm(value)).toBeFalsy();
      }
    });
  });
});
