import React from 'react';
import PropTypes from 'prop-types';

const PatientForm = () => (

  <form>
    <input type="text" name="username" />
    <br />
    <input type="text" name="password" />
    <br />
    <input type="text" name="birthday" />
    <br />
    <input type="text" name="sex" />
    <br />
    <input type="submit" />
  </form>
);

PatientForm.propTypes = {
  patientform: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PatientForm;
