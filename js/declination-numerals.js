export default (n, numeralArr) => {
  const key = [2, 0, 1, 1, 1, 2];
  return numeralArr[(n % 100 > 4 && n % 100 < 20) ? 2 : key[(n % 10 < 5) ? n % 10 : 5]];
};
