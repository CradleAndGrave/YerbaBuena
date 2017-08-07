import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

// TODO: update call to redux store to populate fields

const Notes = props => (
  <div>
    {props.notes.map(note =>
      <div key={ note.id }><Note key={ note.id } note={ note } /></div>
    )}
  </div>
);


Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Notes;
