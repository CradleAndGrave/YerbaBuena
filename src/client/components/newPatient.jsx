import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Collapse, Grid, Col, FormGroup, FormControl } from 'react-bootstrap';
import { addPatient } from '../models/actions';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      birthdate: '',
      age: '',
      sex: '',
      userType: '',
      open: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onPatientClick = this.props.onPatientClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.setState({ open: !this.state.open })}>New Patient</Button>
        <Collapse in={this.state.open}>
          <Grid>
            <Col xs={6} md={4}>
              <FormGroup>
                <FormControl
                  name="firstName"
                  placeholder="First Name"
                  value={ this.state.firstName }
                  onChange={ this.handleInputChange }
                />

                <FormControl
                  name="lastName"
                  placeholder="Last Name"
                  value={ this.state.lastName }
                  onChange={ this.handleInputChange }
                />

                <FormControl
                  name="birthdate"
                  placeholder="Birthdate"
                  value={ this.state.birthdate }
                  onChange={ this.handleInputChange }
                />

                <FormControl
                  name="sex"
                  placeholder="Sex"
                  value={ this.state.sex }
                  onChange={ this.handleInputChange }
                />

                <FormControl
                  placeholder="age"
                  name="age"
                  value={ this.state.age }
                  onChange={ this.handleInputChange }
                />

                <FormControl
                  name="userType"
                  placeholder="UserType: 1 for patient, 2 for provider"
                  value={ this.state.userType }
                  onChange={ this.handleInputChange }
                />

                <Button bsStyle="primary" type="button" onClick={() => this.onPatientClick(this.state)}>Add a Patient</Button>
              </FormGroup>
            </Col>
          </Grid>
        </Collapse>
      </div>
    );
  }
}

User.propTypes = {
  onPatientClick: PropTypes.func.isRequired
};

// eslint-disable-next-line arrow-body-style
const mapStateToProps = () => {
  return {};
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    onPatientClick: (patientObj) => {
      dispatch(addPatient(patientObj));
    }
  };
};

const addPatientForm = connect(mapStateToProps, mapDispatchToProps)(User);

export default addPatientForm;
