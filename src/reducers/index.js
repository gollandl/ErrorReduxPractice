import { combineReducers } from 'redux';
import errorCodeReducer from './errorCodeReducer';
import errorMessageReducer from './errorMessageReducer';

export default combineReducers({
  errorCode: errorCodeReducer,
  errorMessage: errorMessageReducer
});
