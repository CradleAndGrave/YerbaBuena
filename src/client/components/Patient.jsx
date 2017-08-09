import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Patient = ({ patient: { id: id, firstName: first, lastName: last } }) => (
  <div>
    <div><label htmlFor="firstName">Patient: </label> { first } { last }</div>
    <Link to={`/patient/${id}`}>{ first } Note</Link>
  </div>
);

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};


export default Patient;
