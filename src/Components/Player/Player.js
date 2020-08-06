import React from "react";
import GameImage from "./GameImage.js";
import "./Player.css";
const button = props => {
  return (
    <div className="PlayerContainer">
      <GameImage weapon={props.weapon} />
      <p style={{ textAlignLast: "center" }}>{props.player}</p>
      <p style={{ textAlignLast: "center" }}>{props.score} Point</p>
    </div>
  );
};
export default button;
