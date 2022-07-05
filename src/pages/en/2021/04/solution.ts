import { numbers, boards } from './input';

type Grid = { value: number; marked: boolean; row: number; column: number };

class Board {
  numbers: Record<number, Grid>;
  win: boolean = false;

  constructor(boardNumbers: number[]) {
    this.numbers = Object.fromEntries(
      boardNumbers.map((n, i) => [
        n,
        { value: n, marked: false, row: Math.floor(i / 5), column: i % 5 },
      ])
    );
  }

  mark(number: number): boolean {
    const find = this.numbers[number];
    if (find) {
      find.marked = true;
      return this.checkRow(find.row) || this.checkColumn(find.column);
    }
    return false;
  }
  count(): number {
    return Object.values(this.numbers)
      .filter((n) => !n.marked)
      .reduce((acc, { value }) => acc + value, 0);
  }
  isWinning() {
    this.win = true;
  }
  checkRow(row: number): boolean {
    const numbers = Object.values(this.numbers).filter((n) => n.row === row);
    return numbers.every((n) => n.marked);
  }
  checkColumn(column: number): boolean {
    const numbers = Object.values(this.numbers).filter(
      (n) => n.column === column
    );
    return numbers.every((n) => n.marked);
  }
}

function getWinningBoard(called: number[], boardsArr: number[][]) {
  let result: number;
  const boardsList = boardsArr.map((b) => new Board(b));

  called.some((n) => {
    boardsList.some((board) => {
      if (board.mark(n)) {
        result = board.count() * n;
      }
      return result;
    });

    return result;
  });

  return result;
}

const solve = () => getWinningBoard(numbers, boards);

export default solve;

function getLosingBoard(called: number[], boardsArr: number[][]) {
  let lastCalled: number;
  let losingBoard: number;
  let remaining = boardsArr.length;
  const boardsList = boardsArr.map((b) => new Board(b));

  called.some((n) => {
    lastCalled = n;
    boardsList.every((board, i) => {
      if (board.win) return true;
      if (board.mark(n)) {
        losingBoard = i;
        board.isWinning();
        remaining--;
        return true;
      }
      return remaining;
    });
    return !remaining;
  });

  return boardsList[losingBoard].count() * lastCalled;
}

export const second = () => getLosingBoard(numbers, boards);
