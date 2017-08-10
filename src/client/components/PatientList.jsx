import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Patient from './Patient';
import newPatient from './newPatient';

const Patients = ({ patients }) => (
    <div>
    {patients.map(patient =>
                  (<div role="presentation" key={ patient.id }>
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
const mapStateToProps = (state, ownProps) => {
  return { patients: state.patients };
};

const PatientList = connect(mapStateToProps)(Patients);

export default PatientList;
