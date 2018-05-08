import { combineReducers } from 'redux';
import users from './users';
import filterValue from './filter';

export default combineReducers({
    users,
    filterValue
});