import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {Button, FormControl} from 'react-bootstrap'

class PatientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/patientAuth/register',
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
      <form onSubmit={this.onSubmitForm}>
        <FormControl onChange={this.onInputChange} type="text" placeholder="username" name="username" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="password" name="password" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="birthday" name="birhtday" />
        <FormControl onChange={this.onInputChange} type="text" placeholder="sex" name="sex" />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

// PatientForm.propTypes = {
//   patientform: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

export default PatientForm;
