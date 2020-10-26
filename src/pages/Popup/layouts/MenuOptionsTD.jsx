import React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import DialogAboutTD from './DialogAboutTD';

const MenuOptionsTD = ({ custom, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <DialogAboutTD handleCloseMenu={handleClose}/>
      </Menu>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  custom: state.custom,
});

export default connect(mapStateToProps)(MenuOptionsTD);
