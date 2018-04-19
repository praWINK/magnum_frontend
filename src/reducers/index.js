import { combineReducers } from 'redux';
import userDetails from './userDetails';
import courseSession from './courseSession'

export const reducers = combineReducers({
    'user': userDetails,
    'courseSession': courseSession
});