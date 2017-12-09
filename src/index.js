import { UNITS } from './const';
import {
  pxToRemOrEmValue,
  remOrEmToPxValue,
  unitedDimensionToUnitlessPixelValue,
} from './convert';
import { outputWithUnit } from './output';
import {
  elementsOfUnitedNumber,
  numericPartOfUnitedNumber,
  unitPartOfUnitedNumber,
} from './parse';
import {
  isValidNumber,
  isValidPositiveNumber,
  isNumberWithUnit,
  isNumberWithPx,
  isNumberWithEm,
  isNumberWithRem,
  isNumberWithDpi,
  isNumberWithPercent,
  isAspectRatioString,
  isUnitRemOrEm,
} from './predicates';
import { appendUnit } from './utils';

export {
  UNITS,
  pxToRemOrEmValue,
  remOrEmToPxValue,
  unitedDimensionToUnitlessPixelValue,
  outputWithUnit,
  elementsOfUnitedNumber,
  numericPartOfUnitedNumber,
  unitPartOfUnitedNumber,
  isValidNumber,
  isValidPositiveNumber,
  isNumberWithUnit,
  isNumberWithPx,
  isNumberWithEm,
  isNumberWithRem,
  isNumberWithDpi,
  isNumberWithPercent,
  isAspectRatioString,
  isUnitRemOrEm,
  appendUnit,
};
