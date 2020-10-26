import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconTypeTD from '../components/IconTypeTD';
import ListItemText from '@material-ui/core/ListItemText';
import Convert from '../../../utils/convert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ProxyStore from '../settings/proxyStore';
import { SET_ENABLE_CUSTOM, SET_OPEN_DIALOG_CUSTOM } from '../../../store/reducers/custom';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import DialogFormCustomSpeedTD from './DialogFormCustomSpeedTD';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  listItem: {
    paddingBottom: 0,
    paddingTop: 0,
  },
}));

const ListItemCustomSpeedTD = ({ custom, ...props }) => {
  const classes = useStyle();
  const [overCustom, setOverCustom] = useState(false);

  if (custom.hide)
    return (
      <React.Fragment/>
    );

  return (
    <Box {...props}>
      {custom.enable
        ? (<ListItem className={classes.listItem} onMouseEnter={() => setOverCustom(true)}
                     onMouseLeave={() => setOverCustom(false)}>
          <ListItemAvatar>
            <Avatar><IconTypeTD type="Custom"/></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Personalizado"
                        secondary={Convert.bitsToSpeedString(custom.speedCustom * custom.speedUnitCustom)}/>
          <ListItemSecondaryAction onMouseEnter={() => setOverCustom(true)} onMouseLeave={() => setOverCustom(false)}>
            {overCustom
              ? (<Tooltip title="Eliminar">
                <IconButton edge="end" aria-label="delete"
                            onClick={async () => {
                              await ProxyStore.dispatch({ type: SET_ENABLE_CUSTOM, payload: false });
                              setOverCustom(false);
                            }}>
                  <DeleteIcon/>
                </IconButton>
              </Tooltip>)
              : Convert.secondsToTimeString(custom.delayCustom)}
          </ListItemSecondaryAction>
        </ListItem>)
        : (<Box>
          <ListItem className={classes.listItem} button
                    onClick={() => (ProxyStore.dispatch({ type: SET_OPEN_DIALOG_CUSTOM, payload: true }))}>
            <ListItemAvatar>
              <Avatar><AddCircleOutlineIcon/></Avatar>
            </ListItemAvatar>
            <ListItemText primary="Agregar" secondary="Personalizado"/>
          </ListItem>
          <DialogFormCustomSpeedTD/>
        </Box>)}
    </Box>
  );
};


const mapStateToProps = (state) => ({
  custom: state.custom,
});

export default connect(mapStateToProps)(ListItemCustomSpeedTD);
