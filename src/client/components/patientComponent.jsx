import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTreatment } from '../models/actions';

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
    data: { data:
      state.treatments
        .filter(treatment => treatment.userId === id)
        .map(treatment => ({
          id: treatment.userId,
          text: treatment.name,
          start_date: treatment.datetime,
          duration: Math.round(Math.random() * 10) + 1,
          progress: (Math.round(Math.random() * 10) + 1) / 10
        }))
    }
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    myAddTreatment: (treatment) => {
      dispatch(addTreatment(treatment));
    }
  };
};

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
      datetime: null
    };
    // eslint-disable-next-line
    console.log('treatment', treatment);
    this.myAddTreatment(treatment);
  }

  render() {
    const patient = this.props.patient;

    return (
      <div className="patient">
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
        <GanttComponent inputData={this.props.data} />
        <Treatment match={this.props.match} />
      </div>
    );
  }
}

// const patientView = ({ match, patient, notes, treatments, data }) => (
//   <div className='patient'>
//     <h1>Patient View</h1>
//     <Link to={'/'}>Back to Patients List</Link>

//     <GanttComponent inputData={data} />

//     <Demographics
//       firstName={patient.firstName}
//       lastName={patient.lastName}
//       sex={patient.sex}
//       dob={patient.birthdate}
//       age={patient.age}
//     />
//     <Notes notes={notes} />
//     <Treatment treatments={treatments} />

//   </div>
// );

// patientView.propTypes = {
//   match: PropTypes.object.isRequired,
// }

PatientClass.propTypes = {
  patient: PropTypes.object.isRequired,
  treatments: PropTypes.array.isRequired
};

const patientComponent = connect(mapStateToProps, mapDispatchToState)(PatientClass);

export default patientComponent;
