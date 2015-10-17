import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import {mapDispatchToProps} from 'utils/reactRedux';

import AppNav from './components/AppNav';


function mapStateToProps(state) {
  const user = state.getIn(['user'], Map());
  return {
    user,
  };
}

class App extends React.Component {
  render() {
    return (
      <div style={{margin: '0 auto'}}>
        <AppNav/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
