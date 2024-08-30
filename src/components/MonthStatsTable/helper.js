const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const getData = date => {
  const result = [];

  for (let i = 0; i < 31; i++) {
    const countItem = Math.ceil(Math.random() * 5) + 1;
    for (let y = 0; y < countItem; y++) {
      const newObj = {
        date: i,
        amount: getRandom(0, 500),
        time: '',
      };
      result.push(newObj);
    }
  }
  return result;
};
