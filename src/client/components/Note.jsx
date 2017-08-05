import React from 'react';

const Note = ({ note, noteDate }) => (
  <div>
    <div><label>Date: </label> { noteDate }</div>
    <div><label>Encounter Notes: </label> { note}</div>
  </div>

);

export default Note;
