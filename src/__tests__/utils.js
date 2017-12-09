import { appendUnit } from '../index';

describe('appendUnit', () => {
  it('appends the supplied unit', () => {
    expect(appendUnit(10, 'px')).toEqual('10px');
  });
});
