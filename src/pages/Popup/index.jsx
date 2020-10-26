import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeConfig } from './settings/muiTheme';
import { Provider } from 'react-redux';
import ProxyStore from './settings/proxyStore';
import Pages from './pages';


const App = () => {
  const [theme, setTheme] = useState(themeConfig());

  useEffect(() => {
    if (window.matchMedia) {
      const schema = window.matchMedia('(prefers-color-scheme: dark)');
      schema.addEventListener('change', (v) => {
        setTheme(themeConfig());
      });
    }
  }, []);

  return (
    <Provider store={ProxyStore}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Pages/>
      </ThemeProvider>
    </Provider>
  );
};

render(<App/>, window.document.querySelector('#app-container'));
