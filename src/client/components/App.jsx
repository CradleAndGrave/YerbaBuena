/* eslint-disable */
import 'react';
import { connect } from 'react-redux';

// Okay, our Root component has made the store available to every component at every level
// Now we want each component to get access to the piece of the store/object that it needs

// Maybe our ToDoList component just needs the todos. It doesn't need everything else.

// We will make a new component that gets fed the right pieces of state right away.
// And we will let this component talk to the store.

// This funciton helps get the right piece of state.
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

// Now this function will return the right todos.
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// This function will send, dispatch, state to our store.
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
};

// Here's our original component.
const ToDoList = ({ onClick, users }) => (
  <div
    onClick={onClick}
  >
    {users}
  </div>
);

// Connect our two helper functions to our component.
// This is a new component now, connected to our Redux store, and it's what we actually use.
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(ToDoList);


const App = () => <h1>Hello React!</h1>;

export { VisibleTodoList, App };
