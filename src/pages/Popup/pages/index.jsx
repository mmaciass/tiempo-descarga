import React, { useEffect, useState } from 'react';
import SplashPage from './SplashPage';
import ProxyStore from '../settings/proxyStore';
import { Box } from '@material-ui/core';
import ConvertPage from './ConvertPage';

const Pages = ({ ...props }) => {
  const [splash, setSplash] = useState({ showed: false, loaded: false });

  useEffect(() => {
    ProxyStore.ready()
      .then(() => {
        setSplash({ showed: false, loaded: true });
        setTimeout(() => {
          setSplash({ showed: true, loaded: true });
        }, 1000 * 0.5);
      })
      .catch(reason => console.log('error proxy store', reason));


  }, []);

  return (
    <Box {...props}>
      {!splash.showed || !splash.loaded ? (<SplashPage/>) : <ConvertPage/>}
    </Box>
  );


};

export default Pages;
