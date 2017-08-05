import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';

// Add more routes like:
// <Route path="/dashboard" component={dashboard} />

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape.isRequired,
};

export default Root;
