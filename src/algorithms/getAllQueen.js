import { SIZE } from "./board";

function isSafe(row, col, board) {
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 1) return false;
  }
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }
  for (let i = row, j = col; i < SIZE && j >= 0; i++, j--) {
    if (board[i][j] === 1) return false;
  }
  return true;
}

function fillCol(col, allQueens = [], board = []) {
  if (col === SIZE) return true;
  for (let i = 0; i < SIZE; i++) {
    if (isSafe(i, col, board)) {
      allQueens.push({ row: i, col, display: true });
      board[i][col] = 1;
      if (fillCol(col + 1, allQueens, board)) return true;
      allQueens.push({ row: i, col, display: false });
      board[i][col] = 0;
    }
  }
  return false;
}

function getEmptyBoard() {
  let board = [];
  for (let i = 0; i < SIZE; i++) {
    let row = [];
    for (let j = 0; j < SIZE; j++) row[j] = 0;
    board.push(row);
  }
  return board;
}

export const getAllQueen = () => {
  let allQueens = [];
  let board = getEmptyBoard();
  fillCol(0, allQueens, board);
  let placedQueens = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (board[i][j] == 1) placedQueens.push({ row: i, col: j });
    }
  }
  return { allQueens, placedQueens };
};
