import React from 'react';

import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from '../models/index';

import { App } from './App';
import PatientList from './PatientList';
import patientComponent from './patientComponent';

// This window.__ thing makes Redux DevTools work in development!
const store = createStore(
  allReducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//   <Route path="/patient/:id?" component={PatientView} />
const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/patients" component={PatientList} />
        <Route path="/patients/:id" component={patientComponent} />
      </div>
    </Router>
  </Provider>
);

export default Root;
