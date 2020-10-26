import Log from '../../utils/log';

const loggerMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  Log.p(`dispatching ${type}`);
  if (payload)
    Log.d(`with payload ${JSON.stringify(payload, null, 2)}`);
  return next(action);
};
export default loggerMiddleware;
