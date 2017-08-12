import React from 'react';
import PropTypes from 'prop-types';

class ProviderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" />
        <br />
        <input type="text" name="password" />
        <br />
        <input type="text" name="birhtday" />
        <br />
        <input type="text" name="sex" />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

ProviderForm.propTypes = {
  providerform: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProviderForm;
