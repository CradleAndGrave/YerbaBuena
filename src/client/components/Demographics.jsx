import React from 'react';

//TODO: update call to redux store to populate fields

const Demographics = (props) => (

  <div>
    <hr />
    <div>Patient name: { this.state.firstName } { this.state.lastName }</div>
    <div>Sex: { this.state.sex }</div>
    <div>Birthdate: { this.state.dob }</div>
    <div>Age: { this.state.age } </div>
    <hr />
  </div>
);


export default Demographics;


