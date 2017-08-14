import React from 'react';

import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { createStore } from 'redux';

import css from './style.css'

import App from './App';
import Header from './Header';
import allReducers from '../models/index';
import PatientList from './PatientList';
import patientComponent from './patientComponent';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';
import LogIn from './LogIn';


// This window.__ thing makes Redux DevTools work in development!
const store = createStore(
  allReducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/patients" />} />
          <Route path="/login" component={ LogIn }/>
          <Route path="/signup" component={ SignUp }/>
          <Route path="/logout" component={ LogIn }/>
          <PrivateRoute exact path="/patients" component={ PatientList } />
          <PrivateRoute path="/patients/:id" component={ patientComponent } />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default Root;
