export const SIZE = 8;

const createBox = (row, col, color, hasQueen) => {
  return {
    row,
    col,
    color,
    hasQueen,
  };
};

export const getInitialBoard = () => {
  let color = "black";
  let initBoard = [];
  for (let i = 0; i < SIZE; i++) {
    color = color == "white" ? "black" : "white";
    let row = [];
    for (let j = 0; j < SIZE; j++) {
      row.push(createBox(i, j, color, false));
      color = color == "white" ? "black" : "white";
    }
    initBoard.push(row);
  }
  return initBoard;
};
