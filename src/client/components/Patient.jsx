import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Patient = ({ patient: { id, firstName: first, lastName: last } }) => (
  <div>
    <Link to={`/patients/${id}`}>{ first } { last }</Link>
  </div>
);

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient;
