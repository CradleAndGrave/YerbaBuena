import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Demographics from './Demographics';
import Notes from './Notes';
import Treatment from './Treatment';

const notes = [
  { id: 1, body: 'Smells Funny', date: 'April 12, 2001' },
  { id: 2, body: 'Is Dumb', date: 'April 13, 2001' }
];

const patientComponent = ({ match }) => (
  <div>
    <Link to={'/patients'}>Patients List</Link>
    <h1>Patient View</h1>
    <h3>ID: {match.params.id}</h3>
    <Demographics firstName="Joe" lastName="Dirt" sex="Male" dob="April 11, 2001" age="16" />
    <Notes notes={notes} />
    <Treatment />
  </div>
);

patientComponent.propTypes = {
  match: PropTypes.object.isRequired,
};

export default patientComponent;
