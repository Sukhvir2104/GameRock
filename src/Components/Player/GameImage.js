import React from "react";
import scissors from "../../assets/scissors.png";
import paper from "../../assets/paper.png";
import rock from "../../assets/rock.png";
import "./Player.css";

const Player = props => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          props.weapon === "Rock"
            ? rock
            : props.weapon === "Scissors"
            ? scissors
            : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
