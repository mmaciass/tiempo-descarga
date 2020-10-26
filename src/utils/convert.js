const Convert = {
  secondsToTimeString: (seconds) => {
    if (!seconds) return '00:00:00';
    const hourMod = seconds % 3600;
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor(hourMod / 60);
    let second = Math.floor(seconds % 60);
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    return hour + ':' + minute + ':' + second;
  },

  bitsToSpeedString: (bits) => {
    if (bits < 1000000)
      return `${bits / 1000} kbit/s`;
    if (bits >= 1000000)
      return `${bits / (1000 * 1000)} Mbit/s`;
  },
};

export default Convert;
