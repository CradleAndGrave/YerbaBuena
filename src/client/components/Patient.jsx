import React from 'react';
import PropTypes from 'prop-types';

// TODO: update call to redux store to populate fields

const Patient = ({ patient: { firstName: first, lastName: last } }) => (
  <div>
    <div><label htmlFor="firstName">Patient: </label> { first } { last }</div>
  </div>
);

Patient.propTypes = {
  patient: PropTypes.shape.isRequired,
};

export default Patient;
