import { combineReducers } from 'redux';
import { patients, notes, treatments } from './reducers';

const allReducers = combineReducers({
  patients, notes, treatments
});

export default allReducers;
