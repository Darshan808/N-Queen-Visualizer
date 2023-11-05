/* eslint-disable react/prop-types */
import "./Box.css";

const Box = ({ prop }) => {
  return (
    <div className={`box ${prop.color}`} id={`${prop.row}-${prop.col}`}>
      {prop.hasQueen && <img className="queen" src="src/assets/queen.png" />}
    </div>
  );
};

export default Box;
