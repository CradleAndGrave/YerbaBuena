import React from 'react';
import PropTypes from 'prop-types';
import Patient from './Patient';
import { connect } from 'react-redux';

// TODO: update call to redux store to populate fields

const Patients = ({ patients, onPatientClick }) => (
  <div>
    {patients.map(patient =>
                  <div onClick={onPatientClick} key={ patient.id }><Patient key={ patient.id } patient={ patient } /></div>
                 )}
  </div>
);

Patients.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

/*
  mapStateToProps below assumes our state looks like:
  {
  patients: [
  {id: xxxx
  firstName: xxx
  lastName: xxx
  }
  ]
  }

  I am just getting all the patients, not filtering by visibility or something.
  Next we probably will want to filter by patients assigned to a provider.
*/

const mapStateToProps = state => {
  return { patients: state.patients };
};

// This function will send, dispatch, state to our store.
const mapDispatchToProps = dispatch => {
  return {
    onPatientClick: id => {
      dispatch(addPatient(firstName, lastName));
    }
  };
};

const PatientList = connect(mapStateToProps, mapDispatchToProps)(Patients);

export default PatientList;
