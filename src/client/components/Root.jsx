import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';

import todoApp from '../models/index';
import { App, exampleView } from './App';

const store = createStore(todoApp);

// Add more routes like:
// <Route path="/dashboard" component={dashboard} />

// Check in App.jsx at the end for Link examples! Way easy.

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/example" component={exampleView} />
      </div>
    </Router>
  </Provider>
);

export default Root;
