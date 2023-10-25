import { joinArrayWith } from './ArrayUtil';

describe('ArrayUtil', () => {

  it('is defined', () => {
    expect(joinArrayWith).not.toBe(undefined);
  });

  it('works as expected', () => {
    expect(joinArrayWith([1, 2, 3], 'a')).toStrictEqual([1, 'a', 2, 'a', 3]);
  });

  it('works with an empty array', () => {
    expect(joinArrayWith([], 'a')).toStrictEqual([]);
  });

});
