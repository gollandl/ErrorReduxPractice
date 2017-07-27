import { combineReducers } from 'redux';
import errorCodeReducer from './errorCodeReducer';

export default combineReducers({
  errorCode: errorCodeReducer,
});
