import React from "react";
import Player from "../../Components/Player/Player.js";
import "./PlayerC.css";
const button = props => {
  return (
    <div className="playerWrapper">
      {props.playerMode === "0" || props.playerMode === "1" ? (
        <Player
          weapon={props.weapon[0]}
          player={props.player[0]}
          score={props.score[0]}
        />
      ) : (
        <Player
          weapon={props.weapon[1]}
          player={props.player[1]}
          score={props.score[1]}
        />
      )}
      {props.playerMode === "0" ? (
        <Player
          weapon={props.weapon[1]}
          player={props.player[1]}
          score={props.score[1]}
        />
      ) : props.playerMode === "1" ? (
        <Player
          weapon={props.weapon[2]}
          player={props.player[2]}
          score={props.score[2]}
        />
      ) : (
        <Player
          weapon={props.weapon[2]}
          player={props.player[2]}
          score={props.score[2]}
        />
      )}
    </div>
  );
};
export default button;
