import React from 'react';
import PropTypes from 'prop-types';

// TODO: update call to redux store to populate fields

const Demographics = props => (
  <div>
    <hr />
    <div>Patient name: { props.firstName } { props.lastName }</div>
    <div>Sex: { props.sex }</div>
    <div>Birthdate: { props.dob }</div>
    <div>Age: { props.age } </div>
    <hr />
  </div>
);

Demographics.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  age: PropTypes.strin.isRequired
};


export default Demographics;
