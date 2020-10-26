import React from 'react';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconTypeTD from './IconTypeTD';
import ListItemText from '@material-ui/core/ListItemText';
import Convert from '../../../utils/convert';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  listItem: {
    paddingBottom: 0,
    paddingTop: 0,
  },
}));

const ListItemBandwidthsTD = ({ type, speedBits, secondsTime, ...props }) => {
  const classes = useStyle();

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar><IconTypeTD type={type}/></Avatar>
      </ListItemAvatar>
      <ListItemText primary={type} secondary={Convert.bitsToSpeedString(speedBits)}/>
      <ListItemSecondaryAction>
        {Convert.secondsToTimeString(secondsTime)}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListItemBandwidthsTD;
