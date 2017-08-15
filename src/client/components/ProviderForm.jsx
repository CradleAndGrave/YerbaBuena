import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Button, FormControl } from 'react-bootstrap';
import Redirect from 'react-router-dom/Redirect';
import { withRouter } from 'react-router-dom';

import { signupUser } from '../models/actions';

class ProviderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      specialty: '',
      isAuthenticated: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/providerAuth/register',
      data: JSON.stringify(this.state),
      contentType: 'application/json',
      success: () => {
        this.props.onSignup(this.state);
        this.setState({ isAuthenticated: true });
      }

    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isAuthenticated } = this.state;

    if (isAuthenticated) {
      return (
        <Redirect to={ from } />
      );
    }

    return (
      <form onSubmit={this.onSubmit}>
        <FormControl onChange={this.onInputChange} type="text" placeholder="username" name="username" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="password" name="password" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="specialty" name="specialty" />
        <Button className="submit" type="submit">Submit</Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignup: (state) => {
      dispatch(signupUser(state));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ProviderForm));

ProviderForm.propTypes = {
  location: PropTypes.object.isRequired,
  // onSignup: PropTypes.function.isRequired
};
