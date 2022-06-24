import {combineReducers} from 'redux';

// ** Import state store stack
import authReducers from './auth/reducers';

const rootReducers = combineReducers({
  auth: authReducers,
});

export default rootReducers;
