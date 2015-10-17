import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps} from 'utils/reactRedux';
import { Map, List } from 'immutable';

import { Jumbotron } from 'react-bootstrap';
import { RaisedButton } from 'material-ui';

class HomeHandler extends React.Component {
  render() {
    return (
      <span>
        <RaisedButton label="Default" />
        <RaisedButton label="Primary" primary={true} />
        <RaisedButton label="Secondary" secondary={true} />
      </span>
    );
  }
}

export default connect(
  mapDispatchToProps
)(HomeHandler);
