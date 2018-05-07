import {createStore} from 'redux';
import reducer from '../reducers/root';

export const store = createStore(reducer);