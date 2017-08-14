import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTreatment } from '../models/actions'

import Demographics from './Demographics';
import Notes from './Notes';
import Treatment from './Treatment';

import GanttComponent from './GanttComponent';

const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    patient: state.patients.filter(patient => patient.userId === id)[0],
    notes: state.notes.filter(note => note.userId === id),
    treatments: state.treatments.filter(treatment => treatment.userId === id),
    data: {data:
           state.treatments
           .filter(treatment => treatment.userId === id)
           .map(treatment => ({
             id: treatment.userId,
             text: treatment.name,
             start_date: treatment.datetime,
             duration: Math.round(Math.random()*10) + 1,
             progress: (Math.round(Math.random()*10) + 1) / 10
           }))}
  };
};
 
const patientView = ({ match, patient, notes, treatments, data }) => (

  <div className='patient'>
    <h1>Patient View</h1>
    <Link to={'/'}>Back to Patients List</Link>

    <GanttComponent inputData={data} />
  
    <Demographics
      firstName={patient.firstName}
      lastName={patient.lastName}
      sex={patient.sex}
      dob={patient.birthdate}
      age={patient.age}
    />
    <Notes notes={notes} />
    <Treatment treatments={treatments} />

  </div>
);

const mapDispatchToState = (dispatch) => {
  return {
    addTreatment: id => {
      dispatch(addTreatment(treatment));
    }
  };
};

class PatientClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log('patientComponent constructor props:', props);
  }

  addTreatmentClick(event) {
    event.preventDefault();
    console.log('clicked!');
    const treatment = {
      userId: '5',
      name: 'Krypton',
      dose: '13g',
      notes: 'watch the world float to the dark side of the moon',
      action: '1',
      datetime: '8/12/17 8:00'
    }
    console.log(treatment);
    addTreatment(treatment);
  }

  render() {
    // console.log('patientComponent render this:', this);
    const patient = this.props.patient;
    const notes = this.props.notes;
    const treatments = this.props.treatments;

    return (
      <div className='patient'>
        <h1>Patient View</h1>
        <Link to={'/patients'}>Back to Patients List</Link>
        <Demographics
          firstName={patient.firstName}
          lastName={patient.lastName}
          sex={patient.sex}
          dob={patient.birthdate}
          age={patient.age}
        />
        <Notes notes={notes} />
        <Treatment treatments={treatments} addTreatment={this.addTreatmentClick} />
      </div>
    );
  }
};

PatientClass.propTypes = {
  patient: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  treatments: PropTypes.array.isRequired
};

patientView.propTypes = {
  match: PropTypes.object.isRequired,
}

const patientComponent = connect(mapStateToProps, mapDispatchToState)(PatientClass);

export default patientComponent;
