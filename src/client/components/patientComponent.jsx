import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTreatment } from '../models/actions'

import Demographics from './Demographics';
import Notes from './Notes';
import Treatment from './Treatment';

const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    patient: state.patients.filter(patient => patient.userId === id)[0],
    notes: state.notes.filter(note => note.userId === id),
    treatments: state.treatments.filter(treatment => treatment.userId === id)
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    myAddTreatment: (treatment) => {
      dispatch(addTreatment(treatment));
    }
  };
};

// const patientView = ({ match, patient, notes, treatments }) => (
//   <div className='patient'>
//     <h1>Patient View</h1>
//     <Link to={'/'}>Back to Patients List</Link>
//     <Demographics
//       firstName={patient.firstName}
//       lastName={patient.lastName}
//       sex={patient.sex}
//       dob={patient.birthdate}
//       age={patient.age}
//     />
//     <Notes notes={notes} />
//     <Treatment treatments={treatments} />

//     <br />
//     <h3>ID: {match.params.id}</h3>
//     <p>{JSON.stringify(match)}</p>
//     <p>{JSON.stringify(patient)}</p>
//     <p>{JSON.stringify(treatments)}</p>
//     <br />

//   </div>
// );

class PatientClass extends React.Component {
  constructor(props) {
    super(props);
    this.myAddTreatment = this.props.myAddTreatment.bind(this);
  }

  addTreatmentClick(event) {
    event.preventDefault();
    const treatment = {
      userId: 5,
      name: 'Kryptonite',
      dose: '13g/day',
      notes: '',
      action: 1,
      datetime: '8/14/17 13:00'
    }
    console.log('treatment', treatment);
    this.myAddTreatment(treatment);
  }

  render() {
    const patient = this.props.patient;

    return (
      <div>
        <h1>Patient View</h1>
        <Link to={'/patients'}>Back to Patients List</Link>
        <Demographics
          firstName={patient.firstName}
          lastName={patient.lastName}
          sex={patient.sex}
          dob={patient.birthdate}
          age={patient.age}
        />
        <Notes match={this.props.match} />
        <Treatment match={this.props.match} treatments={this.props.treatments} addTreatment={this.addTreatmentClick.bind(this)} />
      </div>
    );
  }
};

PatientClass.propTypes = {
  patient: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  treatments: PropTypes.array.isRequired
};

// patientView.propTypes = {
//   match: PropTypes.object.isRequired,
// }

const patientComponent = connect(mapStateToProps, mapDispatchToState)(PatientClass);

export default patientComponent;
