/* eslint-disable */

import { ADD_PATIENT, ADD_NAME, ADD_TREATMENT } from './actionTypes';

let nextPatientId = 0;

// The below is ES6 object shorthand.
// It will add a property to our object we are returning
// firstName: firstName

const addPatient = ({ userType, providerId, firstName, lastName, sex, birthdate, age }) => {
  return {
    type: ADD_PATIENT,
    id: nextPatientId++,
    userType,
    providerId,
    firstName,
    lastName,
    sex,
    birthdate,
    age
  };
};

const addTreatment = ({ userId, name, dose, note, action, datetime }) => {
  return {
    type: ADD_TREATMENT,
    name,
    dose,
    notes,
    action,
    datetime
  };
};

const addName = ({firstName, lastName}) => {
  return {
    type: ADD_NAME,
    name: { firstName, lastName }
  };
};

export { addPatient, addName, addTreatment };

// addPatient is an action creator - a function to create an action, because that's
// easier than typing out the actions every time.

// Reducers use actions to change our store
