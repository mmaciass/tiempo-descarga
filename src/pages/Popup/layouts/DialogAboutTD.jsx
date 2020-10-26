import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import MenuItem from '@material-ui/core/MenuItem';
import aC from '../../../utils/arrayCaller';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const DialogAboutTD = ({ handleCloseMenu, ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MenuItem onClick={event => aC([handleCloseMenu, handleClickOpen], event)}>
        <ListItemIcon><InfoIcon/></ListItemIcon>
        <Typography variant="subtitle2">Acerca de...</Typography>
      </MenuItem>
      <Dialog fullScreen open={open} onClose={handleClose} {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Acerca de...
            </Typography>
            <Tooltip title="Cerrar">
              <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon/>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Container>
          <Box textAlign="center">
            <img src={chrome.runtime.getManifest().icons['96']} alt="logo ext"/>
            <Typography variant="h6">{chrome.runtime.getManifest().name}</Typography>
            <Box textAlign="justify">
              <Typography>{chrome.runtime.getManifest().description}</Typography>
              <Typography>Autor: Marcos Macias Sánchez</Typography>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogAboutTD;
