import React from "react";
import "./selectC.css";
const button = props => {
  // console.log(document.getElementById("mySelect"));
  return (
    <div className="gameModeContainer" style={{ textAlign: "center" }}>
      <label>GAME MODE</label>
      <br />
      <br />
      <select
        name="gameMode"
        id="mySelect"
        onChange={() =>
          props.modeHandler(document.getElementById("mySelect").value)
        }
      >
        {props.select.map((ig, index) => (
          <option key={index} value={index}>
            {ig}
          </option>
        ))}
      </select>
    </div>
  );
};
export default button;
