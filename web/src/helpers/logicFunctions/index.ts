export const getNoFibonacciNumber = (n: number): number => {
  // curr : acompanhar o número atual da Fibonacci
  // prev : número anterior
  // prevPrev : número anterior do anterior
  let prevPrev = 1,
    prev = 2,
    curr = 3;
  while (n > 0) {
    prevPrev = prev;
    prev = curr;
    curr = prevPrev + prev;
    n = n - (curr - prev - 1);
  }
  n = n + (curr - prev - 1);
  return prev + n;
};
