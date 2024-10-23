import { useState } from "react";
import { getInitialBoard } from "../../algorithms/board";
import "./NQueen.css";
import Box from "../box/Box";
import { getAllQueen } from "../../algorithms/getAllQueen";
import Iteration from "../iteration/iteration";
import { useTheme } from "../../ThemeContext";
// import { animateQueens } from "../../algorithms/animateQueens";

const NQueen = () => {
  const [board, setBoard] = useState(getInitialBoard);
  const [isBoardClear, setIsBoardClear] = useState(true);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [iterations, setIterations] = useState([]);
  const { theme, changeTheme } = useTheme();


  const animateQueens = (queens = [], placedQueens = []) => {
    let l = queens.length;
    for (let i = 0; i <= l; i++) {
      if (i == l) {
        setTimeout(() => {
          setIsVisualizing(false);
          iterations.unshift({ final: true });
          for (let pQ of placedQueens) {
            let box = document.getElementById(`${pQ.row}-${pQ.col}`);
            box.style.backgroundColor = "#03fc41";
          }
        }, 150 * i);
        return;
      }
      setTimeout(() => {
        let r = queens[i].row,
          c = queens[i].col;
        let box = board[r][c];
        let newBoard = [...board];
        if (queens[i].display) box = { ...box, hasQueen: true };
        else box = { ...box, hasQueen: false };
        newBoard[r][c] = box;
        setBoard(newBoard);
        iterations.unshift(queens[i]);
      }, 150 * i);
    }
  };

  function visualize() {
    setIsBoardClear(false);
    setIsVisualizing(true);
    const { allQueens, placedQueens } = getAllQueen();
    animateQueens(allQueens, placedQueens);
  }

  function reset() {
    location.reload();
  }

  function handleClick() {
    if (isVisualizing) return;
    if (isBoardClear) visualize();
    else reset();
  }

  const handleThemeChange = (event) => {
    console.log(event.target.value);
    changeTheme(event.target.value);
  };

  return (
    <>
      <h1 className="heading">
        {" "}
        <span style={{ color: "yellow" }}>N-Queen </span>
        <span style={{ color: "#AAFF00" }}>Visualizer</span>
      </h1>
      <div style={{display:"flex", margin:10}}>
        <div className="button" onClick={() => handleClick()}>
          {isBoardClear
            ? "Visualise N-Queens"
            : isVisualizing
            ? "Visualizing..."
            : "Reset"}
        </div>
        <select value={theme} onChange={handleThemeChange} style={{margin:20}} className="select">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        </select>
      </div>
      <div className="board" id="Board">
        {board.map((row, rowIndx) => {
          return (
            <div key={rowIndx} className="row">
              {row.map((box, boxIndx) => {
                return <Box key={boxIndx} prop={box} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="Iteration-Container">
        <div id="Iterations" className="Iterations">
          {iterations.map((it, itIndx) => {
            return <Iteration key={itIndx} it={it} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NQueen;
