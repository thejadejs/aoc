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

export const second = () => getPowerConsumption(input);
