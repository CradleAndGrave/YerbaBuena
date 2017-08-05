import React from 'react';

//TODO: update call to redux store to populate fields

const Note = ({ note, noteDate }) => (
  <div>
    <div><label>Date: </label> { noteDate }</div>
    <div><label>Encounter Notes: </label> { note}</div>
  </div>

);

export default Note;
