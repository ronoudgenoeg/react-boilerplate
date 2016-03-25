import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

(exports => {
  exports.expect = expect;
  exports.sinon = sinon;
})(global || window || module.exports);
