import React, { Component } from 'react';
import { RaisedButton, } from 'material-ui';

export class App extends Component {
  render() {
    return (
      <div>
        <RaisedButton label="Default" />
        <RaisedButton label="Primary" primary={true} />
        <RaisedButton label="Secondary" secondary={true} />
      </div>
    );
  }
}