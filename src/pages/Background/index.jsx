import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { wrapStore } from 'webext-redux';
import store from '../../store';
import { loadAllConfigsAction } from '../../actions/loadConfigsAction';

wrapStore(store);

const App = () => {
  useEffect(() => {
    store.dispatch(loadAllConfigsAction());
  }, []);
  return (
    <React.Fragment/>
  );
};

render(<App/>, window.document.querySelector('#app-container'));
