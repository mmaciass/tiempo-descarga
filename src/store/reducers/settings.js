const settingsIS = {
  openAboutDialog: false,
};


// este reducer no se ha usado realmente, es solo un ejemplo
const settings = (state = settingsIS, { type, payload }) => {
  switch (type) {
    case SET_OPEN_ABOUT_DIALOG_SETTINGS:
      return { ...state, openAboutDialog: !!payload };
    default:
      return state;
  }
};

export default settings;

export const SET_OPEN_ABOUT_DIALOG_SETTINGS = 'SET_OPEN_ABOUT_DIALOG_SETTINGS';
