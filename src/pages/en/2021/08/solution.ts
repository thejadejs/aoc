import input from './input';

const numOfSegments = {
  1: 2,
  4: 4,
  7: 3,
  8: 7,
};

function countTotalOfEasyDigits(
  data: { patterns: string[]; digits: string[] }[]
) {
  const count = data.reduce((acc, { digits }) => {
    return (
      acc +
      digits.filter((d) => Object.values(numOfSegments).includes(d.length))
        .length
    );
  }, 0);

  return count;
}

const solve = () => countTotalOfEasyDigits(input);

export default solve;
