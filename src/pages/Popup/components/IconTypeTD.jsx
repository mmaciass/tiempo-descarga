import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import RouterIcon from '@material-ui/icons/Router';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SpeedIcon from '@material-ui/icons/Speed';
import DeviceUnknownIcon from '@material-ui/icons/DeviceUnknown';


const IconTypeTD = ({ type }) => {
  switch (type.toLowerCase()) {
    case 'Modem'.toLowerCase():
      return (<CallIcon/>);
    case 'ADSL'.toLowerCase():
      return (<RouterIcon/>);
    case '3G'.toLowerCase():
      return (<PhoneAndroidIcon/>);
    case 'LAN'.toLowerCase():
      return (<SettingsEthernetIcon/>);
    case '4G'.toLowerCase():
      return (<PhoneAndroidIcon/>);
    case 'Custom'.toLowerCase():
      return (<SpeedIcon/>);
    default:
      return (<DeviceUnknownIcon/>);
  }
};

export default IconTypeTD;
