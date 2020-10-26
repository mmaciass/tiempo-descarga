import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ProxyStore from '../settings/proxyStore';
import { SET_SIZE_FILE, SET_UNIT_FILE } from '../../../store/reducers/file';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { CALC_DELAYS_TIME } from '../../../store/reducers/time';
import { CALC_DELAY_CUSTOM } from '../../../store/reducers/custom';

const FormFileSizeTD = ({ file, custom, ...props }) => {
  useEffect(() => {
    ProxyStore.dispatch({ type: CALC_DELAYS_TIME, payload: file.size * file.unit });
    if (custom.enable)
      ProxyStore.dispatch({ type: CALC_DELAY_CUSTOM, payload: file.size * file.unit });
  }, [file.size, file.unit, custom.enable, custom.speedCustom, custom.speedUnitCustom]);

  return (
    <Grid container spacing={2} {...props}>
      <Grid item xs={7}>
        <TextField autoFocus value={file.size} id="file-size" label="Tamaño" type="number" onChange={event => {
          ProxyStore.dispatch({ type: SET_SIZE_FILE, payload: event.target.value });
        }} inputProps={{ min: 0, step: 0.01 }}/>
      </Grid>
      <Grid item xs={5}>
        <FormControl>
          <InputLabel id="selector-unit">Unidad</InputLabel>
          <Select labelId="selector-unit" id="select-unit" value={file.unit} onChange={event => {
            ProxyStore.dispatch({ type: SET_UNIT_FILE, payload: event.target.value });
          }}>
            <MenuItem value={1}>KB</MenuItem>
            <MenuItem value={1024}>MB</MenuItem>
            <MenuItem value={1048576}>GB</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  file: state.file,
  custom: state.custom,
});

export default connect(mapStateToProps)(FormFileSizeTD);
