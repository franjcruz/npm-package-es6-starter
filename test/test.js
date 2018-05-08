import { expect } from 'chai';
import Packg from '../src/index';

describe('Packg', function() {
  describe('#Packg()', function() {
    it('should return hello object', function(done) {
      let packg = new Packg();
      expect(packg).to.be.an('object');

      done();
    });
  });
});
