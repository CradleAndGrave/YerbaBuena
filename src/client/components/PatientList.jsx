import React from 'react';
import Patient from './Patient.jsx'

//TODO: update call to redux store to populate fields

const Patients = (props) => (

  <div>
    {props.patients.map((patient, index) =>
      <div key={ index }><Patient key={ patient.id } patient={ patient } /></div>
    )}
  </div>
);


export default Patients;
