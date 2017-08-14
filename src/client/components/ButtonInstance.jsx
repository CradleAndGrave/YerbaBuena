import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Collapse } from 'react-bootstrap';
import ProviderForm from './ProviderForm';
import PatientForm from './PatientForm';


const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class ButtonInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providerClicked: false,
      patientClicked: false
    };
    this.onProviderClick = this.onProviderClick.bind(this);
    this.onPatientClick = this.onPatientClick.bind(this);
  }

  onProviderClick() {
    this.setState({
      providerClicked: !this.state.providerClicked
    });
  }

  onPatientClick() {
    this.setState({
      patientClicked: !this.state.patientClicked
    });
  }
  render() {
    return (
      <div className="well" style={wellStyles}>
        <div>I am a:</div>
        <Button onClick={this.onProviderClick} bsStyle="primary" bsSize="large" block>Provider</Button>
        <Collapse in={this.state.providerClicked}>
          <div>
            <ProviderForm />
          </div>
        </Collapse>
        <Button onClick={this.onPatientClick} bsSize="large" block>Patient</Button>
        <Collapse in={this.state.patientClicked}>
          <div>
            <PatientForm />
          </div>
        </Collapse>
      </div>
    );
  }
}

// Make this a class component and when posted to data base the response needs to
// Be connected to the store.
// ButtonInstance.propTypes = {};

export default ButtonInstance;
