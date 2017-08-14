import React from 'react';
// import PropTypes from 'prop-types';
import ButtonInstance from './ButtonInstance';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';


const SignUp = () => (
  <div className="authContainer">
    <h1 className="signUp"> Create an Account </h1>
    <ButtonInstance />
    <p>Already registered? <Link to={'/login'}>Sign in</Link></p>
  </div>
);


export default SignUp;
