import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import ProxyStore from '../settings/proxyStore';
import {
  SET_ENABLE_CUSTOM,
  SET_OPEN_DIALOG_CUSTOM,
  SET_SPEED_CUSTOM,
  SET_UNIT_CUSTOM,
} from '../../../store/reducers/custom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const DialogFormCustomSpeedTD = ({ custom, ...props }) => {

  const handleClose = () => {
    ProxyStore.dispatch({ type: SET_OPEN_DIALOG_CUSTOM, payload: false });
  };

  const handleSave = () => {
    ProxyStore.dispatch({ type: SET_ENABLE_CUSTOM, payload: true });
    ProxyStore.dispatch({ type: SET_OPEN_DIALOG_CUSTOM, payload: false });
  };

  return (
    <Dialog open={custom.openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Personalizado</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Agregue los parámetros de su velocidad.
        </DialogContentText>
        <TextField autoFocus value={custom.speedCustom} id="file-size" label="Velocidad" type="number"
                   inputProps={{ min: 0, step: 0.01 }} onChange={event => {
          ProxyStore.dispatch({ type: SET_SPEED_CUSTOM, payload: event.target.value });
        }}/>
        <FormControl>
          <InputLabel id="selector-unit-custom">Unidad</InputLabel>
          <Select labelId="selector-unit-custom" id="select-unit-custom" value={custom.speedUnitCustom}
                  onChange={event => {
                    ProxyStore.dispatch({ type: SET_UNIT_CUSTOM, payload: event.target.value });
                  }}>
            <MenuItem value={1000}>kbit/s</MenuItem>
            <MenuItem value={1000000}>mbit/s</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary" variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};


const mapStateToProps = (state) => ({
  custom: state.custom,
});

export default connect(mapStateToProps)(DialogFormCustomSpeedTD);
