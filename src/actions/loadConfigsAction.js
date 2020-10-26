import { SET_ENABLE_CUSTOM, SET_SPEED_CUSTOM, SET_UNIT_CUSTOM } from '../store/reducers/custom';
import { SET_SIZE_FILE, SET_UNIT_FILE } from '../store/reducers/file';

export const loadAllConfigsAction = () => {
  return (dispatch) => {
    dispatch(loadConfigsCustomAction());
    dispatch(loadConfigsFileAction());
  };
};

const loadConfigsCustomAction = () => {
  return (dispatch) => {
    chrome.storage.local.get(['enableCustom', 'speedCustom', 'speedUnitCustom'],
      ({ enableCustom, speedCustom, speedUnitCustom }) => {
        dispatch({ type: SET_ENABLE_CUSTOM, payload: enableCustom });
        if (speedCustom)
          dispatch({ type: SET_SPEED_CUSTOM, payload: speedCustom });
        if (speedUnitCustom)
          dispatch({ type: SET_UNIT_CUSTOM, payload: speedUnitCustom });
      });
  };
};


const loadConfigsFileAction = () => {
  return (dispatch) => {
    chrome.storage.local.get(['sizeFile', 'unitFile'],
      ({ sizeFile, unitFile }) => {
        if (sizeFile)
          dispatch({ type: SET_SIZE_FILE, payload: sizeFile });
        if (unitFile)
          dispatch({ type: SET_UNIT_FILE, payload: unitFile });
      });
  };
};

