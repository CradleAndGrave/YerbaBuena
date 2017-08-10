import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Patient = ({ patient: { userId, firstName: first, lastName: last } }) => (
  <div>
    <Link to={`/patients/${userId}`}>{ first } { last }</Link>
  </div>
);

Patient.propTypes = {
  patient: PropTypes.shape.isRequired,
};

export default Patient;
