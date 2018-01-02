import controlEffects from '../../src/Components/p5/src/Circle/helpers/control_effects';

const { changeValue } = controlEffects;

describe('Change color', () => {
  it('Increase value', () => {
    const values = { value: 150, target: 255 };
    const result = changeValue(values.value, values.target);
    expect(result).toBeGreaterThan(values.value);
  });
  it('Decrease value', () => {
    const values = { value: 150, target: 55 };
    const result = changeValue(values.value, values.target);
    expect(result).toBeLessThan(values.value);
  });
  it('Equal', () => {
    const values = { value: 55, target: 55 };
    const result = changeValue(values.value, values.target);
    expect(result).toEqual(values.value);
  });
});

