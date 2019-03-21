/*eslint-env jest*/

import HttpUtil from './HttpUtil';

describe('HttpUtil', () => {
  it('is defined', () => {
    expect(HttpUtil).not.toBe(undefined);
  });

  describe('post', () => {

    it('is defined', () => {
      expect(HttpUtil.post).not.toBe(undefined);
    });

    it('returns valid promise', () => {
      const params = {
        url: 'https://test/test',
        asForm: false
      };
      const result = HttpUtil.post(params);
      expect(result).toBeInstanceOf(Promise);
    });
  });

});
