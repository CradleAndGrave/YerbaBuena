import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
