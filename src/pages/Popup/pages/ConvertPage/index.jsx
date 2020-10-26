import React from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import AppBar from '../../layouts/AppBarTD';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { bandwidths } from '../../../../settings/bandwidths';
import ListItemBandwidthsTD from '../../components/ListItemBandwidthsTD';
import ListItemCustomSpeedTD from '../../layouts/ListItemCustomSpeedTD';
import FormFileSizeTD from '../../layouts/FormFileSizeTD';

const ConvertPage = ({ time, ...props }) => {

  return (
    <Box {...props}>
      <AppBar/>
      <Container>
        <FormFileSizeTD/>
      </Container>
      <List>
        <ListItemCustomSpeedTD key="custom-speed"/>
        {bandwidths.map((value, index) => (
          <ListItemBandwidthsTD type={value.type} secondsTime={time.delays[index]} speedBits={value.value}
                                key={`bandwidths-speed-${index}`}/>
        ))}
      </List>
    </Box>
  );
};


const mapStateToProps = (state) => ({
  time: state.time,
});

export default connect(mapStateToProps)(ConvertPage);
