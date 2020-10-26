import { combineReducers } from 'redux';
import file from './file';
import time from './time';
import custom from './custom';

export const allReducers = {
  file, time, custom,
};

const reducers = combineReducers(allReducers);

export default reducers;
