import React from 'react';
import { Provider } from 'react-redux';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';

import allReducers from '../models/index';
import { addPatient } from '../models/actions';
import { App, exampleView, VisibleTodoList } from './App';
import PatientList from './PatientList';


// This window.__ thing makes Redux DevTools work in development!
// If you don't have it, it's a Chrome extension, super nice
const store = createStore(
  allReducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// this is going to be our Ajax request to get the patients data into our store.
// It will live in another file and be more complex than just addPatient.
// We probably still dispatch it right here though.
// for now, a little dummy data.
const patients = [
  { firstName: 'Ash', lastName: 'Woodall' },
  { firstName: 'Zeus', lastName: 'Esquivel' },
  { firstName: 'Tim', lastName: 'Roy' },
  { firstName: 'Shehbaz', lastName: 'Sherwani' },
];

[{firstName, id, lastName]}

patients.map(patient => store.dispatch(addPatient(patient.firstName, patient.lastName)));

//   <Route path="/patient/:id?" component={PatientView} />
const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/todos" component={VisibleTodoList} />
        <Route path="/patients/" component={PatientList} />

        <Route path="/example" component={exampleView} />
      </div>
    </Router>
  </Provider>
);

export default Root;
