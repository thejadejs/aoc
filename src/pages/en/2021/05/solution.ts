import input from './input';

function getVHLines(coordinates: number[][][]): number[][][] {
  return coordinates.filter((c) => c[0][0] === c[1][0] || c[0][1] === c[1][1]);
}

function getVHDLines(coordinates: number[][][]): number[][][] {
  return coordinates.filter(
    (c) =>
      c[0][0] === c[1][0] ||
      c[0][1] === c[1][1] ||
      Math.abs(c[0][0] - c[1][0]) === Math.abs(c[0][1] - c[1][1])
  );
}

function getOverlappingLines(
  coordinates: number[][][],
  countDiagonal = false
): number {
  const lines = countDiagonal
    ? getVHDLines(coordinates)
    : getVHLines(coordinates);
  let count = 0;
  const linesMap = lines.reduce((acc, curr) => {
    const [[x1, y1], [x2, y2]] = curr;
    const [deltaX, deltaY] = [x2 - x1, y2 - y1];
    [...new Array(Math.max(Math.abs(deltaX), Math.abs(deltaY)) + 1)].forEach(
      (_, i) => {
        const n = `${
          deltaX < 0 ? Math.max(x2, x1 - i) : Math.min(x2, x1 + i)
        },${deltaY < 0 ? Math.max(y2, y1 - i) : Math.min(y2, y1 + i)}`;
        acc[n] = (acc[n] || 0) + 1;
        if (acc[n] === 2) {
          count++;
        }
      }
    );

    return acc;
  }, {});

  return count;
}

const solve = () => getOverlappingLines(input);

export default solve;

export const second = () => getOverlappingLines(input, true);
