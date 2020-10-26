import { applyMiddleware, Store } from 'webext-redux';
import thunk from 'redux-thunk';

const store = new Store();

const middleware = [thunk];
const ProxyStore = applyMiddleware(store, ...middleware);

export default ProxyStore;
