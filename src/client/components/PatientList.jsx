import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Patient from './Patient';
import addPatient from '../models/actions';

// const Patients = ({ patients, onPatientClick }) => (
//   <div>
//     {patients.map(patient =>
//       (<div role="presentation" onClick={() => onPatientClick(patient) } key={ patient.id }>
//         <Patient key={ patient.id } patient={ patient } />
//       </div>)
//     )}
//   </div>
// );
const Patients = ({ patients }) => (
  <div>
    {patients.map(patient =>
      (<div role="presentation" key={ patient.id } >
        <Patient key={ patient.id } patient={ patient } />
      </div>)
    )}
  </div>
);

// Patients.propTypes = {
//   patients: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onPatientClick: PropTypes.func.isRequired
// };
Patients.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.shape).isRequired
};

/*
  I am just getting all the patients, not filtering by visibility or something.
  Next we probably will want to filter by patients assigned to a provider.
*/

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { patients: state.patients };
};

// This function will send, dispatch, state to our store.
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    onPatientClick: ({ firstName, lastName }) => {
      dispatch(addPatient(firstName, lastName));
    }
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onPatientClick: () => {
//       console.log('hello');
//     }
//   };
// };

const PatientList = connect(mapStateToProps, mapDispatchToProps)(Patients);

export default PatientList;
