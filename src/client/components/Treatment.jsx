import React from 'react';
import PropTypes from 'prop-types';

const Treatment = ({ treatments }) => (
  <div>
    <hr />
    <h3 >Current Treatment</h3>
    <table className="treatment">
      <tbody>
        <tr>
          <th />
          <th>Prescribed</th>
          <th>Dosage</th>
          <th>Notes</th>
          <th>Date Time</th>
        </tr>
        {treatments.map(treatment =>
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

    <h4>Add Treatment:</h4>
    <form className="treatment">
      <select>
        <option value="apples">Apple</option>
        <option value="pear">Pear</option>
        <option value="orange">Orange</option>
        <option value="prune">Prune</option>
      </select>
      <input type="text" placeholder="What Dosage?" />
      <input type="text" placeholder="Any Notes?" />
      <button type="button">Add</button>
    </form>
    <h4>Recommendation:</h4>
    <table className="treatment">
      <tbody>
        <tr>
          <td>Pears</td>
          <td>200g/day</td>
          <td><button type="button">Add</button></td>
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
        {treatments.map(treatment =>
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
  </div>
);

Treatment.propTypes = {
  treatments: PropTypes.array.isRequired
};

export default Treatment;
