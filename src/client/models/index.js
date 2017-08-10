import { combineReducers } from 'redux';
import { patients, treatments } from './reducers';

const allReducers = combineReducers({
  patients, treatments
});

export default allReducers;
