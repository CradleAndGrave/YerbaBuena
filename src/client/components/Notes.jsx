import React from 'react';
import Note from './Note.jsx'

//TODO: update call to redux store to populate fields

const Notes = (props) => (

  <div>
    {props.notes.map((note, index) =>
      <div key={ index }><Note key={ note.id } note={ note } /></div>
    )}
  </div>
);


export default Notes;
