import { isArrayTwoOrMore } from './types';

describe('isArrayTwoOrMore', () => {
  it('handles null', () => {
    const got = isArrayTwoOrMore(null);
    expect(got).toBe(false);
  });
  it('handles array like objects, length=1', () => {
    // One should not do this, but it is working
    const got = isArrayTwoOrMore({length: 1} as unknown[]);
    expect(got).toBe(false);
  });
  it('handles array like objects, length>1', () => {
    // One should not do this, but it is working
    const got = isArrayTwoOrMore({length: 42} as unknown[]);
    expect(got).toBe(true);
  });
  it('handles empty arrays', () => {
    const got = isArrayTwoOrMore([]);
    expect(got).toBe(false);
  });
  it('handles arrays with length=1', () => {
    const got = isArrayTwoOrMore(['one']);
    expect(got).toBe(false);
  });
  it('handles arrays with length>1', () => {
    const got = isArrayTwoOrMore(['one', 'two']);
    expect(got).toBe(true);
  });
  it('handles arrays with length>1, different type', () => {
    const got = isArrayTwoOrMore(['one', 2]);
    expect(got).toBe(true);
  });
});
