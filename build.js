'use strict';

import 'babel-polyfill'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import App from './src/containers/app';
import reducer from './src/reducers/appReducer';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

window.app = {
  render(el, config) {
    const store = createStoreWithMiddleware(reducer, {config});
    render(<Provider store={store}><App /></Provider>, el);
  }
};
