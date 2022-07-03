import input from './input';

function getPosition(moves: string[]) {
  let x = 0;
  let y = 0;

  const move = (step: string) => {
    const [command, countStr] = step.split(' ');
    switch (command) {
      case 'forward':
        x += Number(countStr);
        break;
      case 'down':
        y += Number(countStr);
        break;
      case 'up':
        y -= Number(countStr);
        break;
      default:
        break;
    }
  };

  moves.forEach(move);

  return x * y;
}

function getAccuratePosition(moves: string[]) {
  let x = 0;
  let y = 0;
  let aim = 0;

  const move = (step: string) => {
    const [command, countStr] = step.split(' ');
    switch (command) {
      case 'forward':
        x += Number(countStr);
        y += aim * Number(countStr);
        break;
      case 'down':
        aim += Number(countStr);
        break;
      case 'up':
        aim -= Number(countStr);
        break;
      default:
        break;
    }
  };

  moves.forEach(move);

  return x * y;
}

const solve = () => getPosition(input);

export default solve;

export const second = () => getAccuratePosition(input);
