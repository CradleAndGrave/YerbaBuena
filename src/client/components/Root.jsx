import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

// Add more routes like:
// <Route path="/dashboard" component={dashboard} />

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default Root;
