import { SIZE } from "../../algorithms/board";
import "./iteration.css";

const map = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
};

const iteration = ({ it }) => {
  if (it.final)
    return (
      <div className="alert final">
        {SIZE} QUEENS HAVE BEEN PLACED SUCCESSFULLY
      </div>
    );
  if (it.display)
    return (
      <div className="alert success">{`Trying queen at ${map[it.col]}${
        it.row + 1
      }`}</div>
    );
  else
    return (
      <div className="alert danger">{`Removed queen from ${map[it.col]}${
        it.row
      }`}</div>
    );
};

export default iteration;
