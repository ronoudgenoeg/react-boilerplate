import React, {PropTypes as P} from 'react';
import {connect} from 'react-redux';
import {identity} from 'ramda';
import {updateState} from '../actions/app';

const App = React.createClass({

  handleOnClick: function() {
    this.props.dispatch(updateState({
      hello: 'world'
    }));
  },

  render: function() {
    return <div>
    <h1>Hello world</h1>
    <button onClick={this.handleOnClick}>sets state to hello world</button>
    </div>;
  },

  propTypes: {
    dispatch: P.func.isRequired
  }
});

const select = identity;

export default connect(select)(App);
