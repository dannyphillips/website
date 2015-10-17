import React from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import createStore from 'store/create';

import { fromJS } from 'immutable';

const store = createStore(fromJS({
  session: {},
  collections: {},
}));

const Home = require('./app/views/home');


const rootRoute = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: require('./app/handler'),
      indexRoute: Home,
    },
  ],
};

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  React.render(
    <Provider store={store}>
      {() => <Router history={history} routes={rootRoute}/>}
    </Provider>
    , document.getElementById('root')
  );
});
