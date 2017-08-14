import React from 'react';
// import PropTypes from 'prop-types';
import ButtonInstance from './ButtonInstance';

const LogIn = () => (
  <div className="authContainer">
    <h1 className="login"> Welcome Back </h1>
    <ButtonInstance />
    <p>Need an account? <a>Sign up</a></p>
  </div>
);

// SignUp.propTypes = {
//   signup: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

export default LogIn;
