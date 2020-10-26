import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import MenuOptionsTD from './MenuOptionsTD';

const useStyle = makeStyles((theme) => ({
  btnMenu: {
    marginLeft: 'auto',
  },
}));

const AppBarTD = ({ ...props }) => {
  const classes = useStyle();

  return (
    <AppBar position="static" {...props}>
      <Toolbar>
        <Typography variant="h6">
          {chrome.runtime.getManifest().name}
        </Typography>
        <MenuOptionsTD className={classes.btnMenu}/>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarTD;
