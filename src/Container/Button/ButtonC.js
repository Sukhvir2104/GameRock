import React from "react";
import Button from "../../Components/Button/Button.js";
import Transition from "react-transition-group/Transition";
import "./ButtonC.css";
const animationTiming = {
  enter: 1000,
  exit: 1000
};
const button = props => {
  return (
    <div className="ButtonContainer">
      {/* -----------------------animation code for button hide and show--------- */}
      <Transition
        in={!props.selectV}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {state => {
          const cssClasses = [
            "ButtonwrapperA",
            state === "entering"
              ? "ModalOpen"
              : state === "exiting"
              ? "ModalClosed"
              : null
          ];
          return (
            <div className={cssClasses.join(" ")}>
              {props.Weapons.map((ig, index) => (
                <Button
                  type={props.type}
                  clicked={() => props.clicked(ig)}
                  key={index}
                >
                  {ig}
                </Button>
              ))}
            </div>
          );
        }}
      </Transition>
      <div className="winner">{props.Result}</div>
      <div className="startButton">
        <Button clicked={props.startClicked} type={props.type}>
          Start!
        </Button>
      </div>
    </div>
  );
};
export default button;
