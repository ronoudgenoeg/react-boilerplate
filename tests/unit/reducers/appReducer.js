import reducer from '../../../src/reducers/appReducer';

describe('appReducer', () => {

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

  describe('sends the UPDATE_STATE action', () => {

    it('returns the new state with the value of the given payload', () => {
      expect(reducer({
        someData: [1, 2, 3, 4, 5]
      }, {
        type: 'UPDATE_STATE',
        payload: {
          someOtherDate: [2, 4, 6, 8]
        }
      })).to.deep.equal({
        someOtherDate: [2, 4, 6, 8]
      })
    });
  });


});
