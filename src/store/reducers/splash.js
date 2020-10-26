const splashIS = {
  showed: false,
  loaded: false,
};


// este reducer no se ha usado realmente, es solo un ejemplo
const splash = (state = splashIS, { type, payload }) => {
  switch (type) {
    case TYPE_SHOWED:
      return { ...state, showed: true };
    case TYPE_LOADED:
      return { ...state, loaded: true };
    default:
      return state;
  }
};

export default splash;

export const TYPE_SHOWED = 'SHOWED';
export const TYPE_LOADED = 'LOADED';
