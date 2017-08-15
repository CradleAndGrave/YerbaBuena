import React from 'react';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import { BrowserRouter as Router, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...other }) => (
  <Route
    { ...other }
    render={props => (
      user.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/signup' }} />
      )
    )}
  />
);

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

PrivateRoute.propTypes = {
  // component: PropTypes.function.isRequired,
  user: PropTypes.object.isRequired
};


export default connect(mapStateToProps)(PrivateRoute);
