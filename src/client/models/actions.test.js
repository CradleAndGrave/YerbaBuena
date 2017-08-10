/* eslint-disable */
import { addPatient } from './actions';
import { ADD_PATIENT } from './actionTypes';

describe('actions', () => {
  it('should create an action to add a patient', () => {
    const newPatient = { userId: 4, userType: 1, providerId: 3, firstName: 'Tim', lastName: 'Roy', sex: 'male', birthdate: '12/13/84', age: '32' };
    const expectedAction = {
      id: 0,
      type: ADD_PATIENT,
      userType: 1,
      firstName: 'Tim',
      lastName: 'Roy',
      providerId: 3,
      sex: 'male',
      birthdate: '12/13/84',
      age: '32'
    };
    expect(addPatient(newPatient)).toEqual(expectedAction);
  });
});
