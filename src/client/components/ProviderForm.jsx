import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class ProviderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
      success: (data) => {
        console.log(data);
      }

    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.onInputChange} type="text" placeholder="username" name="username" />
        <br />
        <input onChange={this.onInputChange} type="text" placeholder="password" name="password" />
        <br />
        <input onChange={this.onInputChange} type="text" placeholder="birthday" name="birhtday" />
        <br />
        <input onChange={this.onInputChange} type="text" placeholder="sex" name="sex" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default ProviderForm;
