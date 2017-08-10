import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Demographics from './Demographics';
import Notes from './Notes';
import Treatment from './Treatment';

const notes = [
  { id: 1, body: 'Smells Great', date: 'April 12, 2001' },
  { id: 2, body: 'Kills it All DAY', date: 'April 13, 2001' }
];

const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return { patient: state.patients.filter(patient => patient.userId === id)[0] };
};

const patientView = ({ match, patient }) => (
  <div>
    <h1>Patient View</h1>
    <Link to={'/patients'}>Back to Patients List</Link>
    <Demographics
      firstName={patient.firstName}
      lastName={patient.lastName}
      sex={patient.sex}
      dob={patient.birthdate}
      age={patient.age}
    />
    <Notes notes={notes} />
    <Treatment />

    <br />
    <h3>ID: {match.params.id}</h3>
    <p>{JSON.stringify(match)}</p>
    <p>{JSON.stringify(patient)}</p>
    <br />
  </div>
);

patientView.propTypes = {
  match: PropTypes.shape.isRequired,
  patient: PropTypes.shape.isRequired
};

const patientComponent = connect(mapStateToProps)(patientView);

export default patientComponent;
