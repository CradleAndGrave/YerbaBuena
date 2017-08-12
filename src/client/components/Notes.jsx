import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

// TODO: update call to redux store to populate fields

const Notes = ({ notes }) => (
  <div>
    ({notes.map(note =>
      (<div key={ note.datetime }>
        <Note note={ note } />
      </div>)
    )})
  </div>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Notes;
