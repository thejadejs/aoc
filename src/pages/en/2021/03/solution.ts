import input from './input';

function getPowerConsumption(reports: string[]) {
  const temp = [...reports[0]].map(() => [0, 0]);

  reports.forEach((report) => {
    report.split('').forEach((r, i) => {
      temp[i][Number(r)] += 1;
    });
  });

  const [gamma, epsilon] = temp.reduce(
    (prev, curr) => {
      if (curr[0] > curr[1]) return [prev[0] + 0, prev[1] + 1];
      return [prev[0] + 1, prev[1] + 0];
    },
    ['', '']
  );
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const solve = () => getPowerConsumption(input);

export default solve;

function divideArray(list: string[], index: number) {
  return list.reduce(
    (prev, curr) => {
      if (curr[index] === '0') prev[0].push(curr);
      if (curr[index] === '1') prev[1].push(curr);
      return prev;
    },
    [[], []]
  );
}

function getDividedArray(
  list: string[],
  index: number,
  type: 'common' | 'least'
) {
  const [zero, one] = divideArray(list, index);
  console.log(zero, one);

  if (type === 'common') {
    if (one.length >= zero.length) return one;
    return zero;
  }

  if (type === 'least') {
    if (zero.length <= one.length) return zero;
    return one;
  }
}

function getLifeSupport(reports: string[]) {
  const length = reports[0].length;
  let o2 = '';
  let co2 = '';
  let common = [...reports];
  let least = [...reports];

  [...Array(length)].some((r, i) => {
    common = getDividedArray(common, i, 'common');
    if (common.length === 1) o2 = common[0];
    least = getDividedArray(least, i, 'least');
    if (least.length === 1) co2 = least[0];
    if (o2 && co2) return true;
  });
  console.log(o2, co2, common, least);

  return parseInt(o2, 2) * parseInt(co2, 2);
}

export const second = () => getLifeSupport(input);
