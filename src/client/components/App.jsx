/* eslint-disable */
import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import Signup from './SignUp';

import SignUp from './SignUp';

const App = () =>
      <div>
      <Link to="/patients">Patient List</Link>
      <SignUp />
      </div>;

export { App };
