import React from 'react';
import './index.css';
import './anims.css';
import Box from '@material-ui/core/Box';
import arrow from '../../../../assets/vector/fragments/arrow.svg';
import timeDown from '../../../../assets/vector/fragments/time-down.svg';
import timeUp from '../../../../assets/vector/fragments/time-up.svg';
import timeUpCenter from '../../../../assets/vector/fragments/time-up-center.svg';
import Typography from '@material-ui/core/Typography';

const SplashPage = ({ ...props }) => {
  return (
    <Box {...props} textAlign="center">
      <div className={`time-up-full`}>
        <img src={timeUpCenter} alt="time-up-center" className={`element-logo time-up-center`}/>
        <img src={timeUp} alt="time-up" className={`element-logo time-up`}/>
      </div>
      <img src={timeDown} alt="time-down" className={`element-logo time-down`}/>
      <img src={arrow} alt="arrow" className={`element-logo arrows`}/>
      <Typography className={`letter`} variant="h6">
        Tiempo de <br/> Descarga
      </Typography>
    </Box>
  );
};

export default SplashPage;
