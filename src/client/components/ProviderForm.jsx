import React from 'react';
import PropTypes from 'prop-types';

const ProviderForm = () => (
  <form>
    <input type="text" name="username" />
    <br />
    <input type="text" name="password" />
    <br />
    <input type="text" name="specialty" />
    <br />
    <input type="submit" />
  </form>
);

ProviderForm.propTypes = {
  providerform: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProviderForm;
