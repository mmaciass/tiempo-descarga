import { createStore } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';
import Log from '../utils/log';

const store = createStore(reducers, middlewares);

Log.d('Store Redux Created');

export default store;
