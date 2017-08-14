import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Patient = ({ patient: { userId, firstName: first, lastName: last } }) => (
  <div>
    <Link
      className="patientLink"
      to={`/patients/${userId}`}
    >
      { first } { last }
    </Link>
  </div>
);

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
};

export default Patient;
