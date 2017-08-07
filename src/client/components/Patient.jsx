import React from 'react';

//TODO: update call to redux store to populate fields

const Patient = ({ firstName, lastName }) => (
  <div>
    <div><label>Patient: </label> { firstName } { lastName }</div>
  </div>

);

export default Patient;
