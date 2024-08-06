import {createStore} from 'redux';
import {riskReducer} from './reducer';

const store = createStore(riskReducer);

export default store;
