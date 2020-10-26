import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import IconTypeTD from '../components/IconTypeTD';
import { connect } from 'react-redux';
import aC from '../../../utils/arrayCaller';
import ProxyStore from '../settings/proxyStore';
import { SET_HIDE_CUSTOM } from '../../../store/reducers/custom';
import DialogAboutTD from './DialogAboutTD';

const MenuOptionsTD = ({ custom, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleHideCustom = () => {
    ProxyStore.dispatch({ type: SET_HIDE_CUSTOM, payload: !custom.hide });
  };

  return (
    <React.Fragment>
      <Box {...props}>
        <Tooltip title="Opciones">
          <IconButton aria-label="menu" onClick={handleClick}>
            <MoreVertIcon/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu id="options-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={event => aC([handleClose, toggleHideCustom], event)}>
          <ListItemIcon><IconTypeTD type="Custom"/></ListItemIcon>
          <Typography variant="subtitle2">{custom.hide ? `Mostrar` : `Ocultar`} Personalizado</Typography>
        </MenuItem>
        <DialogAboutTD handleCloseMenu={handleClose}/>
      </Menu>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  custom: state.custom,
});

export default connect(mapStateToProps)(MenuOptionsTD);
