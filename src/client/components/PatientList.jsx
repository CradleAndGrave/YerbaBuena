import React from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient';

// TODO: update call to redux store to populate fields

const Patients = props => (
  <div>
    {props.patients.map(patient =>
      <div key={ patient.id }><Patient key={ patient.id } patient={ patient } /></div>
    )}
  </div>
);

Patients.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.shape).isRequired,
};


export default Patients;
