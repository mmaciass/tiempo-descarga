import { applyMiddleware } from 'redux';
import loggerMiddleware from './logger';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(
  thunk, loggerMiddleware,
);

export default middlewares;
