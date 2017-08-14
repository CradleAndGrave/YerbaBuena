import { combineReducers } from 'redux';
import { user, patients, notes, treatments } from './reducers';

const allReducers = combineReducers({
  user, patients, notes, treatments
});

export default allReducers;
