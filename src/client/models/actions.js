/* eslint-disable */

const nextTodoId = 0;
// The below is ES6 object shorthand.
// It will add a property
// text: text

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId,
    text,
  };
};

export default addTodo;

// addTodo is an action creator - a function to create an action, because that's
// easier than typing out the actions every time.

// Reducers use actions to change our store
