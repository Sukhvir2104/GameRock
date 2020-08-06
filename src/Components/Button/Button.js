import React from "react";
import "./Button.css";
const button = props => {
  return (
    <button
      type={props.type}
      onClick={props.clicked}
      className="weaponBtn"
      style={
        props.children === "Start!"
          ? { backgroundColor: "#000", color: "#fff" }
          : null
      }
    >
      {props.children}
    </button>
  );
};
export default button;
