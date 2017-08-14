import React from 'react';
import PropTypes from 'prop-types';

// TODO: update call to redux store to populate fields

const Demographics = props => (
  <div>
    <hr />

    <div><label>Patient name:</label> { props.firstName } { props.lastName }</div>
    <div><label>Sex:</label> { props.sex }</div>
    <div><label>Birthdate:</label> { props.dob }</div>
    <div><label>Age:</label> { props.age } </div>
    <hr />
  </div>
);

Demographics.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
};

export default Demographics;
