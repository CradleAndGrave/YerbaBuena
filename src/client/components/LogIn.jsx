import React from 'react';
// import PropTypes from 'prop-types';
import ButtonInstance from './ButtonInstance';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

const LogIn = () => (
  <div className="authContainer">
    <h1 className="login"> Welcome Back </h1>
    <ButtonInstance />
    <p>Need an account? <Link to={'/signup'}>Sign up</Link></p>
  </div>
);

// SignUp.propTypes = {
//   signup: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

export default LogIn;
