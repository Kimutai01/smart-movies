const homeCounter = (data) => {
  let sum = 0;
  data.forEach(() => {
    sum += 1;
  });
  return sum;
};

export default homeCounter;
