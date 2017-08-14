import React from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';

// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...other }) => (
  <Route { ...other } render={props => (
    user.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signup' }}/>
    )
  )}/>
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(PrivateRoute);
