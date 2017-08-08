import React from 'react';

const Treatment = () => (
  <div>
    <hr />
    <h3>Current Treatment:</h3>
    <table>
      <tr>
        <th>Perscribed</th>
        <th>Dosage</th>
        <th></th>
      </tr>
      <tr>
        <td>Apples</td>
        <td>1 a day</td> 
        <td><button type="button">Remove</button></td>
      </tr>
      <tr>
        <td>Oranges</td>
        <td>1 after each meal</td> 
        <td><button type="button">Remove</button></td>
      </tr>
    </table>
    <h3>Add Treatment:</h3>
    <form>
      <select>
        <option value="apples">Apple</option>
        <option value="pear">Pear</option>
        <option value="orange">Orange</option>
        <option value="prune">Prune</option>
      </select>
      <input type="text" placeholder="What Dosage?" />
      <button type="button">Add</button>
    </form>
    <h4>Recommendation:</h4>
    <table>
      <tr>
        <td>Pears</td>
        <td>200g/day</td>
        <td><button type="button">Add</button></td>
      </tr>
    </table>
    <h3>Treatment History:</h3>
    <table>
      <tr>
        <th>Action</th>
        <th>Perscribed</th>
        <th>Dosage</th>
      </tr>
      <tr>
        <td>Added</td>
        <td>Apples</td>
        <td>1 a day</td> 
      </tr>
      <tr>
        <td>Added</td>
        <td>Prunes</td>
        <td>500g / day</td> 
      </tr>
      <tr>
        <td>Added</td>
        <td>Oranges</td>
        <td>1 after each meal</td> 
      </tr>
      <tr>
        <td>Removed</td>
        <td>Prunes</td>
        <td>500g / day</td> 
      </tr>
    </table>
    <hr />
  </div>
);


export default Treatment;
