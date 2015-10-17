import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import AppNav from './components/AppNav';


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

export default App;
