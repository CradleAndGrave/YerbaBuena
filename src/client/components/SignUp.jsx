import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonInstance from './ButtonInstance';


const SignUp = () => (
  <div className="authContainer">
    <h1 className="signUp"> Create an Account </h1>
    <ButtonInstance />
    <p>Already registered? <Link to={'/login'}>Sign in</Link></p>
  </div>
);

export default SignUp;
