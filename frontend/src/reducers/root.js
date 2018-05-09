import { combineReducers } from 'redux';
import users from './users';
import filterValue from './filter';
import sort from './sort'

export default combineReducers({
    users,
    filterValue,
    sort
});