/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import addPatient from '../models/actions';

// Not really sure why I added to Redux store
// No other component will need to know current state of name in this form
// https://goshakkk.name/should-i-put-form-state-into-redux/

// const newPatient = ({ firstName, lastName, onPatientClick, onNameChange }) => (
//   <div>
// <input value={ firstName } onChange={ (event) => onNameChange(event) }></input>
//     <button type="button" onClick={ () => onPatientClick({ firstName: firstName, lastName: lastName }) }>Add a Patient</button>
//   </div>
// );


const newPatient = () => {
  return (
  <div>
    <div><label htmlFor="firstName">Patient: </label>What</div>
      </div>);
};

// newPatient.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   onPatientClick: PropTypes.func.isRequired,
//   onNameChange: PropTypes.func.isRequired
// };

// // eslint-disable-next-line arrow-body-style
// const mapStateToProps = (state) => {
//   return { firstName: 'Tim',
//            lastName: 'Roy'};
// };

// // This function will send, dispatch, state to our store.
// // eslint-disable-next-line arrow-body-style
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPatientClick: ({ firstName, lastName }) => {
//       dispatch(addPatient(firstName, lastName));
//     },
//     onNameChange: event => console.log(event)
//   };
// };

// const addPatientForm = connect(mapStateToProps, mapDispatchToProps)(newPatient);

export default newPatient;
