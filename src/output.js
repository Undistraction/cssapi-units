import { appendUnit } from './utils';
import { isUnitRemOrEm } from './predicates';
import { pxToRemOrEmValue } from './convert';

// eslint-disable-next-line import/prefer-default-export
export const outputWithUnit = (unit, baseFontSize, value) =>
  appendUnit(
    isUnitRemOrEm(unit) ? pxToRemOrEmValue(value, baseFontSize) : value,
    unit
  );
