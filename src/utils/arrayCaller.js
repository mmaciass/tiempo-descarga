const aC = (arrayFunctions, ...params) => {
  arrayFunctions.forEach(value => {
    value(...params);
  });
};

export default aC;
