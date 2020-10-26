const fileIS = {
  unit: 1024,

  speedCustom: null,
  speedUnitCustom: null,
};

const file = (state = fileIS, { type, payload }) => {
  switch (type) {
    case SET_SIZE_FILE:
      chrome.storage.local.set({ sizeFile: payload });
      return { ...state, size: payload };
    case SET_UNIT_FILE:
      chrome.storage.local.set({ unitFile: payload });
      return { ...state, unit: payload };
    default:
      return state;
  }
};

export default file;

export const SET_SIZE_FILE = 'SET_SIZE_FILE';
export const SET_UNIT_FILE = 'SET_UNIT_FILE';
