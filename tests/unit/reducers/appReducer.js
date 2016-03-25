import reducer from '../../../src/reducers/appReducer';

describe('appReducer', () => {

  describe('no action is sent to the reducer', () => {

    it('returns the current state', () => {
      expect(reducer({
        someData: [1, 2, 3, 4, 5]
      })).to.deep.equal({
        someData: [1, 2, 3, 4, 5]
      })
    });
  });

  describe('an action that the appReducer doesnt care about is sent', () => {

    it('returns the current state', () => {
      expect(reducer({
        someData: [1, 2, 3, 4, 5]
      }, {
        type: 'SOMETHING_IT_DOESNT_CARE_ABOUT'
      })).to.deep.equal({
        someData: [1, 2, 3, 4, 5]
      })
    });
  });

});
