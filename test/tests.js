import React from 'react';
import {expect} from 'chai';

import convert from '../src/convert';

describe('RomanNumeralsConverter', function() {
  describe('convert', function() {
    it('should work with correct entry', function(done) {
      convert("MMXVIII");
      done();
    });

    it('should throw error with uncorrect entry', function() {
      expect(() => convert("123")).to.throw();
      expect(() => convert("MMMMM")).to.throw();
    });

    it('should convert empty to 0', function() {
      expect(convert("")).to.equal(0);
    });

    it('should convert MCDXLIV to 1444', function() {
      expect(convert("MCDXLIV")).to.equal(1444);
    });

    it('should convert MDCLXVI to 1666', function() {
      expect(convert("MDCLXVI")).to.equal(1666);
    });

    it('should convert MMMMCMXCIX to 4999', function() {
      expect(convert("MMMMCMXCIX")).to.equal(4999);
    });

    it('should convert MMXVIII to 2018', function() {
      expect(convert("MMXVIII")).to.equal(2018);
    });
  });
});