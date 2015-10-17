import React from 'react';
import Handler from './handler';

const store = createStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        {() => <Handler/>}
      </Provider>
    );
  }
}
