import React from 'react';
import PropTypes from 'prop-types';

//TODO: update call to redux store to populate fields

const Note = ({ note, noteDate }) => (
  <div>
    <div><label htmlFor="noteDate" >Date: </label> { noteDate }</div>
    <div><label htmlFor="note" >Encounter Notes: </label> { note}</div>
  </div>

);

Note.propTypes = {
  note: PropTypes.string.isRequired,
  noteDate: PropTypes.string.isRequired
};

export default Note;
