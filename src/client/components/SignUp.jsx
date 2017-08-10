import React from 'react';
import PropTypes from 'prop-types';
import ButtonInstance from './ButtonInstance';

// TODO: update call to redux store to populate fields
const SignUp = () => (
  <div>
    <h1 className="signUp"> Sign Up </h1>
    <ButtonInstance />
  </div>
);

SignUp.propTypes = {
  signup: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default SignUp;
