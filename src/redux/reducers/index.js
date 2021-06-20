import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';

const rootReducer = combineReducers({
  count: counterReducer,
  isLogged: isLoggedReducer
});

export default rootReducer;