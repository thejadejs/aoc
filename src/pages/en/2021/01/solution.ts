import input from './input';

function countIncreases(data: number[]) {
  const inc = data.reduce((prev, curr, i) => {
    // first measurement
    if (i === 0) return prev;
    // count increasing
    if (data[i - 1] < curr) return prev + 1;
    return prev;
  }, 0);
  return inc;
}

const solve = () => countIncreases(input);

export default solve;

export function second() {
  const three = input
    .slice(0, -2)
    .map((t, i) => t + input[i + 1] + input[i + 2]);
  return countIncreases(three);
}
