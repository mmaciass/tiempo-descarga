const customIS = {
  hide: false,
  openDialog: false,

  enable: false,
  speedCustom: undefined,
  speedUnitCustom: 1000,

  delayCustom: 0,
};

const custom = (state = customIS, { type, payload }) => {
  switch (type) {
    case SET_HIDE_CUSTOM:
      return { ...state, hide: !!payload };
    case SET_OPEN_DIALOG_CUSTOM:
      return { ...state, openDialog: !!payload };
    case SET_ENABLE_CUSTOM:
      chrome.storage.local.set({ enableCustom: !!payload });
      return { ...state, enable: !!payload };
    case SET_SPEED_CUSTOM:
      chrome.storage.local.set({ speedCustom: payload });
      return { ...state, speedCustom: payload };
    case SET_UNIT_CUSTOM:
      chrome.storage.local.set({ speedUnitCustom: payload });
      return { ...state, speedUnitCustom: payload };
    case CALC_DELAY_CUSTOM:
      if (!!payload && !!state.speedCustom && !!state.speedUnitCustom) {
        const delayCustom = (payload * 1024 * 8) / (state.speedCustom * state.speedUnitCustom);
        return { ...state, delayCustom };
      }
      return state;
    default:
      return state;
  }
};

export default custom;

export const SET_HIDE_CUSTOM = 'SET_HIDE_CUSTOM';
export const SET_OPEN_DIALOG_CUSTOM = 'SET_OPEN_DIALOG_CUSTOM';
export const SET_ENABLE_CUSTOM = 'SET_ENABLE_CUSTOM';
export const SET_SPEED_CUSTOM = 'SET_SPEED_CUSTOM';
export const SET_UNIT_CUSTOM = 'SET_UNIT_CUSTOM';
export const CALC_DELAY_CUSTOM = 'CALC_DELAY_CUSTOM';
