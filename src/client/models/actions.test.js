/* eslint-disable */
import { addPatient } from './actions';
import { ADD_PATIENT } from './actionTypes';

describe('actions', () => {
  it('should create an action to add a patient', () => {
    const expectedAction = {
      id: 0,
      type: ADD_PATIENT,
      firstName: 'Tim',
      lastName: 'Roy'
    };
    expect(addPatient('Tim', 'Roy')).toEqual(expectedAction);
  });
});
