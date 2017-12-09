import { outputWithUnit } from '../output';

describe('outputWithUnit()', () => {
  it('outputs the value with the correct unit', () => {
    expect(outputWithUnit('rem', 10, 20)).toEqual('2rem');
    expect(outputWithUnit('px', 10, 20)).toEqual('20px');
    expect(outputWithUnit('em', 10, 20)).toEqual('2em');
  });
});
