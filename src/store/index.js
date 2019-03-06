import myReducers from './reducers';
import { createStore } from 'redux';

const store=createStore(myReducers);

export default store