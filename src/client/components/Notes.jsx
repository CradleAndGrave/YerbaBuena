import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import Note from './Note';
import { addNote } from '../models/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state, match) => {
  const id = Number(match.match.params.id);
  return {
    notes: state.notes.filter(note => note.userId === id)
  };
};

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    addNoteClick: (noteObj) => {
      dispatch(addNote(noteObj));
    }
  };
};


class NotesClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: Number(this.props.match.params.id),
      body: '',
      datetime: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNoteClick = this.props.addNoteClick.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        {this.props.notes.length === 0 ?
          <p>There are no notes about this patient.</p> :
          this.props.notes.map(note =>
            (<div key={ note.datetime }>
              <Note note={ note } />
            </div>))}
        <FormControl
          name="body"
          placeholder="Add a note"
          value={ this.state.body }
          onChange={ this.handleInputChange }
        />
        <Button
          bsStyle="primary"
          type="button"
          onClick={() => this.addNoteClick(this.state)}
        >
          Add
        </Button>
      </div>
    );
  }
}

// const Notes = ({ notes }) => (
//   <div>
//     {notes ? notes.map(note =>
//       (<div key={ note.datetime }>
//         <Note note={ note } />
//       </div>)
//     ) : <p>There are no notes about this patient.</p>}
//   </div>
// );
// // <td>{ treatment.action === 1 ? 'Added' : 'Removed' }</td>

// Notes.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };

NotesClass.propTypes = {
  notes: PropTypes.array.isRequired
};

const Notes = connect(mapStateToProps, mapDispatchToProps)(NotesClass);

export default Notes;
