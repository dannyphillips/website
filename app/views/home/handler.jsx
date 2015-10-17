import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from 'utils/reactRedux';
import { Map, List } from 'immutable';

import { Jumbotron } from 'react-bootstrap';

class HomeHandler extends React.Component {
  render() {
    return (
      <span>
        <Jumbotron>
          <h1>together.</h1>
          <p>Our feed</p>
        </Jumbotron>
      </span>
    );
  }
}

export default connect(
  mapDispatchToProps
)(HomeHandler);
