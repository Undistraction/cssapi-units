import { __, values, reject, equals, map, compose, flatten } from 'ramda';
import { appendUnit } from '../index';
import { UNITS } from '../const';

export const positiveNumbers = () => [5, 5.5];
export const negativeNumbers = () => [-5, -5.5];
export const genericNumbers = () => [...positiveNumbers, ...negativeNumbers, 0];

const unitNames = values(UNITS);
const appendUnitToUnitlessValues = unit =>
  map(appendUnit(__, unit))(genericNumbers());

const appendUnitsToUnitlessValues = compose(
  flatten,
  map(appendUnitToUnitlessValues)
);

export const genericInvalidValues = () => [
  5,
  '5',
  'px',
  'px10',
  '5 px',
  '',
  null,
  {},
  undefined,
  [],
  true,
  false,
  NaN,
  0,
];

export const invalidNumbers = () => [
  null,
  {},
  undefined,
  [],
  true,
  false,
  NaN,
  '',
  'xxx',
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY,
];

export const numbersWithUnitNotIncluding = unit => {
  const equalsUnit = equals(unit);
  const otherSupportedUnits = reject(equalsUnit, unitNames);
  return [...appendUnitsToUnitlessValues(otherSupportedUnits), 'xx'];
};

export const validNumbersWithUnit = unit => appendUnitToUnitlessValues(unit);

export const validNumbersWithAllUnits = () =>
  appendUnitsToUnitlessValues(unitNames);

export const validNumbersWithPx = ['-0.5px', '1.8px', '0px'];
