import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Demographics from './Demographics';
import Notes from './Notes';
import Treatment from './Treatment';

const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    patient: state.patients.filter(patient => patient.userId === id)[0],
    notes: state.notes.filter(note => note.userId === id),
    treatments: state.treatments.filter(treatment => treatment.userId === id)
  };
};

// class P

const patientView = ({ match, patient, notes, treatments }) => (
  <div className='patient'>
    <h1>Patient View</h1>
    <Link to={'/'}>Back to Patients List</Link>
    <Demographics
      firstName={patient.firstName}
      lastName={patient.lastName}
      sex={patient.sex}
      dob={patient.birthdate}
      age={patient.age}
    />
    <Notes notes={notes} />
    <Treatment treatments={treatments} />

    <br />
    <h3>ID: {match.params.id}</h3>
    <p>{JSON.stringify(match)}</p>
    <p>{JSON.stringify(patient)}</p>
    <p>{JSON.stringify(treatments)}</p>
    <br />

  </div>
);

patientView.propTypes = {
  match: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  treatments: PropTypes.array.isRequired
};

const patientComponent = connect(mapStateToProps)(patientView);

export default patientComponent;
