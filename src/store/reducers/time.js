import Log from '../../utils/log';
import { bandwidths } from '../../settings/bandwidths';

const timeIS = {
  delays: new Array(bandwidths.length).fill(0),
};


const time = (state = { ...timeIS }, { type, payload }) => {
  switch (type) {
    case CALC_DELAYS_TIME:
      const delays = [...timeIS.delays];
      delays.forEach((value, index) => {
        delays[index] = (payload * 1024 * 8) / bandwidths[index].value;
      });
      Log.d(`news delays ${delays}`);
      return { ...state, delays };
    default:
      return state;
  }
};

export default time;

export const CALC_DELAYS_TIME = 'CALC_DELAYS_TIME';
