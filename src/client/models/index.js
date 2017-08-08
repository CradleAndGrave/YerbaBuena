import { combineReducers } from 'redux';
import { todos, visibilityFilter, patients } from './reducers';

const allReducers = combineReducers({
  todos,
  visibilityFilter,
  patients
});

export default allReducers;
