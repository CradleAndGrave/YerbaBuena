/* eslint-disable */

import { ADD_PATIENT } from './actionTypes';

let nextPatientId = 0;

// The below is ES6 object shorthand.
// It will add a property to our object we are returning
// firstName: firstName

const addPatient = (firstName, lastName) => {
  return {
    type: ADD_PATIENT,
    id: nextPatientId++,
    firstName,
    lastName
  };
};

export default addPatient;

// addPatient is an action creator - a function to create an action, because that's
// easier than typing out the actions every time.

// Reducers use actions to change our store
