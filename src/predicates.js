import { __, contains, curry, join, gt, both, all, either } from 'ramda';
import { isInteger, isFloat } from 'ramda-adjunct';
import { UNITS } from './const';

export const isValidNumber = either(isFloat, isInteger);
export const isValidPositiveNumber = both(isValidNumber, gt(__, 0));

export const isNumberWithUnit = curry((units, value) => {
  const regex = `^-?\\d+(?:.\\d+)?(?:${join('|', units)})$`;
  return new RegExp(regex).test(value);
});
export const isNumberWithPx = isNumberWithUnit([UNITS.PX]);
export const isNumberWithEm = isNumberWithUnit([UNITS.EM]);
export const isNumberWithRem = isNumberWithUnit([UNITS.REM]);
export const isNumberWithDpi = isNumberWithUnit([UNITS.DPI]);
export const isNumberWithPercent = isNumberWithUnit([UNITS.PERCENT]);

export const isUnitRemOrEm = contains(__, [UNITS.EM, UNITS.REM]);
