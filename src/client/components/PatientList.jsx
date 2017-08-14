import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Patient from './Patient';
import User from './newPatient';

const Patients = ({ patients }) => (
  <div className="patientList">
    <h1>Patient List</h1>
    {patients.map(patient =>
      (<div role="presentation" key={ patient.userId } >
        <Patient key={ patient.userId } patient={ patient } />
      </div>)
    )}
    <User />
  </div>
);

Patients.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.shape).isRequired
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return { patients: state.patients };
};

const PatientList = connect(mapStateToProps)(Patients);

export default PatientList;
