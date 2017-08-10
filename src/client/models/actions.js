/* eslint-disable */
import { ADD_PATIENT, ADD_PATIENT_HISTORY, ADD_TREATMENT } from './actionTypes';

// The below is ES6 object shorthand.
// It will add a property to our object we are returning
// firstName: firstName

let nextPatientStateId = 0;
const addPatient = ({ userType, providerId, firstName, lastName, sex, birthdate, age }) => {
  return {
    type: ADD_PATIENT,
    id: nextPatientStateId++,
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


let nextHistoryId = 0;
const addPatientHistory = (historyId, notes, treatments) => {
  return {
    type: ADD_PATIENT_HISTORY,
    historyId: historyId || nextHistoryId++,
    notes,
    treatments
  };
};

export { addPatient, addName, addTreatment, addPatientHistory };
