import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import { addTreatment } from '../models/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    treatments: state.treatments.filter(treatment => treatment.userId === id)
  };
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    addTreatment: (treatmentObj) => {
      dispatch(addTreatment(treatmentObj));
    }
  };
};

class TreatmentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: Number(this.props.match.params.id),
      name: '',
      dose: '',
      notes: '',
      action: 1,
      datetime: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTreatmentClick = this.addTreatmentClick.bind(this);
    this.recommendTreatmentClick = this.recommendTreatmentClick.bind(this);
    console.log('Proper Keys need to be added to "treatment.jsx" tables');
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addTreatmentClick(event) {
    event.preventDefault();
    this.props.addTreatment(this.state);
    this.setState({
      name: '',
      dose: '',
      notes: ''
    })
  }

  recommendTreatmentClick(event) {
    event.preventDefault();
    this.setState({
      name: 'Apple',
      dose: '1/day',
      notes: 'Don\'t give people Kryptonite...'
    });
  }


  render() {
    return (
      <div>
        <hr />
        <h3>Current Treatment</h3>
        <table className="treatment">
          <tbody>
            <tr>
              <th />
              <th>Prescribed</th>
              <th>Dosage</th>
              <th>Notes</th>
              <th>Date Time</th>
            </tr>
            {this.props.treatments.map(treatment =>
              (<tr key={Math.round(Math.random() * 1000) + 1}>
                <td><button type="button">Remove</button></td>
                <td>{ treatment.name }</td>
                <td>{ treatment.dose }</td>
                <td>{ treatment.notes }</td>
                <td>{ treatment.datetime }</td>
              </tr>)
            )}
          </tbody>
        </table>

        <h4>Add Treatment:</h4>
        <form className="treatment" onSubmit={this.addTreatmentClick}>
          <FormControl
            name="name"
            placeholder="What Drug?"
            value={ this.state.name }
            onChange={ this.handleInputChange }
          />
          <FormControl
            name="dose"
            placeholder="What Dosage?"
            value={ this.state.dose }
            onChange={ this.handleInputChange }
          />
          <FormControl
            name="notes"
            placeholder="Any Notes?"
            value={ this.state.notes }
            onChange={ this.handleInputChange }
          />
          <Button
            bsStyle="primary"
            type="submit"
          >
            Add
          </Button>
        </form>
        <h4>Recommendation:</h4>
        <table className="treatment">
          <tbody>
            <tr>
              <td>Kryptonite</td>
              <td>13g/day</td>
              <td><button type="button" onClick={this.recommendTreatmentClick}>Add</button></td>
            </tr>
          </tbody>
        </table>

        <h4>Treatment History:</h4>
        <table className="treatmentHx">
          <tbody>
            <tr>
              <th>Action</th>
              <th>Perscribed</th>
              <th>Dosage</th>
              <th>Notes</th>
              <th>Date Time</th>
            </tr>
            {this.props.treatments.map(treatment =>
              (<tr key={Math.round(Math.random() * 1000) + 1}>
                <td>{ treatment.action === 1 ? 'Added' : 'Removed' }</td>
                <td>{ treatment.name }</td>
                <td>{ treatment.dose }</td>
                <td>{ treatment.notes }</td>
                <td>{ treatment.datetime }</td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

// const Treatment = ({ treatments, addTreatment }) => (
//   <div>
//     <hr />
//     <h3>Current Treatment</h3>
//     <table className="treatment">
//       <tbody>
//         <tr>
//           <th />
//           <th>Prescribed</th>
//           <th>Dosage</th>
//           <th>Notes</th>
//           <th>Date Time</th>
//         </tr>
//         {treatments.map(treatment =>
//           (<tr key={ treatment.datetime }>
//             <td><button type="button">Remove</button></td>
//             <td>{ treatment.name }</td>
//             <td>{ treatment.dose }</td>
//             <td>{ treatment.notes }</td>
//             <td>{ treatment.datetime }</td>
//           </tr>)
//         )}
//       </tbody>
//     </table>

//     <h4>Add Treatment:</h4>
//     <form className="treatment" onSubmit={addTreatment}>
//       <input name="name" type="text" placeholder="What Drug?" />
//       <input name="dose" type="text" placeholder="What Dosage?" />
//       <input name="notes" type="text" placeholder="Any Notes?" />
//       <button type="submit">Add</button>
//     </form>
//     <h4>Recommendation:</h4>
//     <table className="treatment">
//       <tbody>
//         <tr>
//           <td>Kryptonite</td>
//           <td>13g/day</td>
//           <td><button type="button" onClick={addTreatment}>Add</button></td>
//         </tr>
//       </tbody>
//     </table>

//     <h4>Treatment History:</h4>
//     <table className="treatmentHx">
//       <tbody>
//         <tr>
//           <th>Action</th>
//           <th>Perscribed</th>
//           <th>Dosage</th>
//           <th>Notes</th>
//           <th>Date Time</th>
//         </tr>
//         {treatments.map(treatment =>
//           (<tr key={ treatment.datetime }>
//             <td>{ treatment.action === 1 ? 'Added' : 'Removed' }</td>
//             <td>{ treatment.name }</td>
//             <td>{ treatment.dose }</td>
//             <td>{ treatment.notes }</td>
//             <td>{ treatment.datetime }</td>
//           </tr>)
//         )}
//       </tbody>
//     </table>
//   </div>
// );

TreatmentClass.propTypes = {
  treatments: PropTypes.array.isRequired
};

const Treatment = connect(mapStateToProps, mapDispatchToProps)(TreatmentClass);

export default Treatment;
