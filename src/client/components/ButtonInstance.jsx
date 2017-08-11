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
    this.setState(prevState => ({
      providerClicked: !prevState.providerClicked
    }));
  }

  onPatientClick() {
    this.setState(prevState => ({
      patientClicked: !prevState.patientClicked
    }));
  }
  render() {
    const isProviderClicked = this.state.providerClicked;
    const isPatientClicked = this.state.providerClicked;

    let provider = null;
    let patient = null;

    if (isProviderClicked && !isPatientClicked) {
      provider = <ProviderForm />;
    } else if (!isProviderClicked && isPatientClicked) {
      patient = <PatientForm />;
    }

    return (
      <div className="well" style={wellStyles}>

        <Button providerClick={this.onProviderClick} bsStyle="primary" bsSize="large" block>Provider?</Button>
        <Collapse>
          <div>
            {provider}
          </div>
        </Collapse>
        <Button patientClick={this.onPatientClick} bsSize="large" block>Patient?</Button>
        <Collapse>
          <div>
            {patient}
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
