import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Collapse } from 'react-bootstrap';
import ProviderForm from './ProviderForm';
import PatientForm from './PatientForm';


const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const ButtonInstance = () => (
  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>Provider?</Button>
    <Collapse>
      <div>
        <ProviderForm />
      </div>
    </Collapse>
    <Button bsSize="large" block>Patient?</Button>
    <Collapse>
      <div>
        <PatientForm />
      </div>
    </Collapse>
  </div>
);


// ButtonInstance.propTypes = {};

export default ButtonInstance;
