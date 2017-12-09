import { join, curry } from 'ramda';

// eslint-disable-next-line import/prefer-default-export
export const appendUnit = curry((value, unit) => join('', [value, unit]));
