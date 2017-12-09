import { divide, multiply } from 'ramda';
import { isUnitRemOrEm } from './predicates';
import { elementsOfUnitedNumber } from './parse';

export const pxToRemOrEmValue = (value, baseFontSize) =>
  divide(value, baseFontSize);

export const remOrEmToPxValue = (value, baseFontSize) =>
  multiply(value, baseFontSize);

export const unitedDimensionToUnitlessPixelValue = (value, baseFontSize) => {
  const [number, unit] = elementsOfUnitedNumber(value);
  return isUnitRemOrEm(unit) ? remOrEmToPxValue(number, baseFontSize) : number;
};
