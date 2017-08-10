import React from 'react';

import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';

import allReducers from '../models/index';
// import addPatient from '../models/actions';
import { addPatient } from '../models/actions';

import { App } from './App';
import PatientList from './PatientList';
import patientComponent from './patientComponent';


// This window.__ thing makes Redux DevTools work in development!
// If you don't have it, it's a Chrome extension, super nice
const store = createStore(
  allReducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Mock list of all the patients and thier most basic fields. 

// This data should be stored on the .users table and should be filter by 
// 'providerId' that is returned from when a provider logs on. 

// This data should be replaced with an AJAX call to the 'users' table of the 
// database. The ajax call should be preformed during the 'pre-load' of the 
// patientList component.

// The results of the AJAX request will be dispatched to the redux state.
const patients = [
  { userId: 1, providerId: 3, firstName: 'Ash', lastName: 'Woodall', sex: 'female', birthdate: '?', age: '?' },
  { userId: 2, providerId: 6, firstName: 'Zeus', lastName: 'Esquivel', sex: 'male', birthdate: '?', age: '?' },
  { userId: 4, providerId: 3, firstName: 'Tim', lastName: 'Roy', sex: 'male', birthdate: '?', age: '?' },
  { userId: 5, providerId: null, firstName: 'Shehbaz', lastName: 'Sherwani', sex: 'male', birthdate: '03/25/89', age: '28' }
];

patients.map(patient => store.dispatch(addPatient(patient)));

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
