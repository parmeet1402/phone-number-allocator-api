module.exports = number => {
  if (number === 3) {
    return Math.floor(Math.random() * (999 - 111 + 1) + 111);
  } else if (number === 4) {
    return Math.floor(Math.random() * (9999 - 1111 + 1) + 1111);
  }
};
