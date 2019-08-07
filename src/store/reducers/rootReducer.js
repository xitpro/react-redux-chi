import { combineReducers } from 'redux';
import { profileReducers } from './profileReducer';

export default combineReducers({
  profile: profileReducers,
});