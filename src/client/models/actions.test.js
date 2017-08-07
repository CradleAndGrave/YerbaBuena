/* eslint-disable */
import addTodo from './actions';
import ADD_TODO from './actionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      id: 0,
      type: ADD_TODO,
      text
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });
});
