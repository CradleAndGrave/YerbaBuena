/* eslint-disable */

import { ADD_PATIENT, ADD_PATIENT_HISTORY } from './actionTypes';


// The below is ES6 object shorthand.
// It will add a property to our object we are returning
// firstName: firstName

let nextPatientStateId = 0;
const addPatient = (patients) => {
  return {
    type: ADD_PATIENT,
    id: nextPatientStateId++,
    userId: patients.userId,
    firstName: patients.firstName,
    lastName: patients.lastName,
    sex: patients.sex,
    birthdate: patients.birthdate,
    age: patients.age,
    providerId: patients.providerId
  };
};

let nextHistoryId = 0;
const addPatientHistory = (historyId, notes, treatments) => {
  return {
    type: ADD_PATIENT_HISTORY,
    historyId: historyId || nextHistoryId++,
    notes,
    treatments
  };
};

// export default addPatient;
export { addPatient, addPatientHistory };


// addPatient is an action creator - a function to create an action, because that's
// easier than typing out the actions every time.

// Reducers use actions to change our store
