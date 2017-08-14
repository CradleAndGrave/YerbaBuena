import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    notes: state.notes.filter(note => note.userId === id),
    treatments: state.treatments.filter(treatment => treatment.userId === id)
  };
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    addTreatmentClick: (treatmentObj) => {
      dispatch(addTreatment(treatmentObj));
    }
  };
};

class TreatmentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      name: '',
      dose: '',
      notes: '',
      action: null,
      datetime: '8/14/17 13:00'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTreatmentClick = this.props.addTreatmentClick.bind(this);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addTreatment() {
    console.log('Add Treatment');
  };

  render () {
    return (
        <div>
          <hr />
          <h3>Current Treatment:</h3>
          <table>
            <tbody>
              <tr>
                <th />
                <th>Perscribed</th>
                <th>Dosage</th>
                <th>Notes</th>
                <th>Date Time</th>
              </tr>
              {this.props.treatments.map(treatment =>
                (<tr key={ treatment.datetime }>
                  <td><button type="button">Remove</button></td>
                  <td>{ treatment.name }</td>
                  <td>{ treatment.dose }</td>
                  <td>{ treatment.notes }</td>
                  <td>{ treatment.datetime }</td>
                </tr>)
              )}
            </tbody>
          </table>

          <h3>Add Treatment:</h3>
          <form onSubmit={this.addTreatment}>
            <input name="name" type="text" placeholder="What Drug?" />
            <input name="dose" type="text" placeholder="What Dosage?" />
            <input name="notes" type="text" placeholder="Any Notes?" />
            <button type="submit">Add</button>
          </form>
          <h4>Recommendation:</h4>
          <table>
            <tbody>
              <tr>
                <td>Kryptonine</td>
                <td>13g/day</td>
                <td><button type="button" onClick={this.addTreatment}>Add</button></td>
              </tr>
            </tbody>
          </table>

          <h3>Treatment History:</h3>
          <table>
            <tbody>
              <tr>
                <th>Action</th>
                <th>Perscribed</th>
                <th>Dosage</th>
                <th>Notes</th>
                <th>Date Time</th>
              </tr>
              {this.props.treatments.map(treatment =>
                (<tr key={ treatment.datetime }>
                  <td>{ treatment.action === 1 ? 'Added' : 'Removed' }</td>
                  <td>{ treatment.name }</td>
                  <td>{ treatment.dose }</td>
                  <td>{ treatment.notes }</td>
                  <td>{ treatment.datetime }</td>
                </tr>)
              )}
            </tbody>
          </table>
          <hr />
        </div>
      );
  }
}

TreatmentClass.propTypes = {
  notes: PropTypes.array.isRequired
};

const Treatment = connect(mapStateToProps, mapDispatchToProps)(TreatmentClass);

export default Treatment;

// const Treatment = ({ treatments, addTreatment }) => (
//   <div>
//     <hr />
//     <h3>Current Treatment:</h3>
//     <table>
//       <tbody>
//         <tr>
//           <th />
//           <th>Perscribed</th>
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

//     <h3>Add Treatment:</h3>
//     <form onSubmit={addTreatment}>
//       <input name="name" type="text" placeholder="What Drug?" />
//       <input name="dose" type="text" placeholder="What Dosage?" />
//       <input name="notes" type="text" placeholder="Any Notes?" />
//       <button type="submit">Add</button>
//     </form>
//     <h4>Recommendation:</h4>
//     <table>
//       <tbody>
//         <tr>
//           <td>Kryptonine</td>
//           <td>13g/day</td>
//           <td><button type="button" onClick={addTreatment}>Add</button></td>
//         </tr>
//       </tbody>
//     </table>

//     <h3>Treatment History:</h3>
//     <table>
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
//     <hr />
//   </div>
// );

// Treatment.propTypes = {
//   treatments: PropTypes.array.isRequired
// };

// export default Treatment;
