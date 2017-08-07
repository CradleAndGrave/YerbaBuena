import React from 'react';
import PropTypes from 'prop-types';

// TODO: update call to redux store to populate fields

const Patient = ({ firstName, lastName }) => (
  <div>
    <div><label htmlFor="firstName">Patient: </label> { firstName } { lastName }</div>
  </div>
);

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Patient;
