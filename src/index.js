import {
  __,
  curry,
  divide,
  multiply,
  contains,
  join,
  view,
  compose,
  lensIndex,
  isNil,
  none,
  any,
  complement,
  gt,
  both,
  is,
  all,
  either,
} from 'ramda';

export const UNITS = Object.freeze({
  EM: 'em',
  REM: 'rem',
  PX: 'px',
});

export const appendUnit = (value, unit) => join('', [value, unit]);

export const unitIsRemOrEm = contains(__, [UNITS.EM, UNITS.REM]);

export const pxToRemOrEmValue = (value, baseFontSize) =>
  divide(value, baseFontSize);

export const remOrEmToPxValue = (value, baseFontSize) =>
  multiply(value, baseFontSize);

export const toDimensionOutput = (unit, baseFontSize, value) =>
  appendUnit(
    unitIsRemOrEm(unit) ? pxToRemOrEmValue(value, baseFontSize) : value,
    unit
  );

// -----------------------------------------------------------------------------
// Numbers With Units
// -----------------------------------------------------------------------------

export const elementsOfUnitedNumber = value => {
  const captures = /^(-?\d+(?:.\d+)?)([a-z]+)?$/.exec(value);
  if (!captures || any(isNil, [captures, captures[1], captures[2]])) {
    throw new Error(`Supplied value was not a number with a unit: '${value}'`);
  }
  return [Number(captures[1]), captures[2]];
};

export const numericPartOfUnitedNumber = compose(
  view(lensIndex(0)),
  elementsOfUnitedNumber
);

export const unitPartOfUnitedNumber = compose(
  view(lensIndex(1)),
  elementsOfUnitedNumber
);

export const unitedDimensionToUnitlessPixelValue = (value, baseFontSize) => {
  const [number, unit] = elementsOfUnitedNumber(value);
  return unitIsRemOrEm(unit) ? remOrEmToPxValue(number, baseFontSize) : number;
};

export const unitedResolutionToUnitlessValue = value =>
  numericPartOfUnitedNumber(value);

export const isNumberWithUnit = curry((units, value) => {
  const regex = `^-?\\d+(?:.\\d+)?(?:${join('|', units)})$`;
  return new RegExp(regex).test(value);
});

export const isNumberWithPx = isNumberWithUnit([UNITS.PX]);
export const isNumber = both(is(Number), complement(Number.isNaN));
export const allAreNumbersOrPixelValues = all(either(isNumber, isNumberWithPx));
export const isPositiveNumber = both(isNumber, gt(__, 0));
