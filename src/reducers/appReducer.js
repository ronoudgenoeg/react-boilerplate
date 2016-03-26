import {handleActions} from 'redux-actions';

const reducer = handleActions({
  UPDATE_STATE: (state, action) => action.payload
}, {});

export default reducer;
