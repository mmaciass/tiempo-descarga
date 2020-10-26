const Log = {
  d: (...optionalParams) => {
    if (process.env.NODE_ENV === 'development')
      console.log(Date.now(), ...optionalParams);
  },
  p: (...optionalParams) => {
    console.log(...optionalParams);
  },
};

export default Log;
