import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Patient from './Patient';

const Patients = ({ patients }) => (
  <div>
    <h1>Patient List</h1>
    {patients.map(patient =>
      (<div role="presentation" key={ patient.userId } >
        <Patient key={ patient.userId } patient={ patient } />
      </div>)
    )}
  </div>
);

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

const PatientList = connect(mapStateToProps)(Patients);

export default PatientList;
