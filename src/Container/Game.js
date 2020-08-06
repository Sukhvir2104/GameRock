import React, { Component } from "react";
import "./styles.css";
import Button from "./Button/ButtonC.js";
import Player from "./PlayerC/PlayerC.js";
import SelectOption from "./selectC/selectC.js";

const weapons = ["Rock", "Paper", "Scissors"];
let Players = ["Player One", "Computer One", "Computer Two"];
const Selectoptions = [
  "Player One Vs Computer One",
  "Player One Vs Computer Two",
  "Computer One Vs Computer Two"
];
class Game extends Component {
  state = {
    playerOne: weapons[Math.floor(Math.random() * weapons.length)],
    playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
    playerThree: weapons[1], //weapons[Math.floor(Math.random() * weapons.length)],
    Result: "",
    playerScore: 0,
    Computer1Score: 0,
    Computer2Score: 0,
    P1andC2Mode: "0",
    selectV: false
  };

  startGame = () => {
    let counter = 0;
    let i = 0;
    let gameInterval = setInterval(() => {
      //--------for computer one  random logic for random selection of images---------
      if (document.getElementById("mySelect").value === "0") {
        i = 5;
        counter++;
        this.setState({
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
          winner: ""
        });
      }
      //-------------------------for tactical computer player------------
      else if (document.getElementById("mySelect").value === "1") {
        i = 3;
        counter++;

        //-------------------------for tactical computer player Logic------------

        if (this.state.playerThree === "Rock") {
          this.setState({
            playerThree: weapons[1],
            winner: ""
          });
        } else if (this.state.playerThree === "Paper") {
          this.setState({
            playerThree: weapons[2],
            winner: ""
          });
        } else {
          this.setState({
            playerThree: weapons[0],
            winner: ""
          });
        }
      } else {
        //////-------------------code for computer one and computer two ---------
        i = 3;
        counter++;
        this.setState({
          playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
          winner: ""
        });

        //-------------------------for tactical computer player Logic------------
        if (this.state.playerThree === "Rock") {
          this.setState({
            playerThree: weapons[1],
            winner: ""
          });
        } else if (this.state.playerThree === "Paper") {
          this.setState({
            playerThree: weapons[2],
            winner: ""
          });
        } else {
          this.setState({
            playerThree: weapons[0],
            winner: ""
          });
        }
      }
      if (counter > i) {
        clearInterval(gameInterval);
        this.selectWinner();
      }
    }, 100);
  };

  selectWinner = () => {
    let {
      playerOne,
      playerTwo,
      playerScore,
      Computer1Score,
      Computer2Score,
      playerThree
    } = this.state;
    //------------------------for player One and computers one------------
    if (document.getElementById("mySelect").value === "0") {
      if (playerOne === playerTwo) {
        return this.setState({
          Result: "Oops it's a Tie!"
        });
      } else if (
        (playerOne === "Rock" && playerTwo === "Scissors") ||
        (playerOne === "Scissors" && playerTwo === "Paper") ||
        (playerOne === "Paper" && playerTwo === "Rock")
      ) {
        if (playerScore < 2) {
          return this.setState({
            playerScore: playerScore + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer1Score: 0,
            Result: " Player One is Winner",
            playerScore: 0
          });
        }
      } else {
        if (Computer1Score < 2) {
          return this.setState({
            Computer1Score: Computer1Score + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer1Score: 0,
            Result: " Computer One is Winner",
            playerScore: 0
          });
        }
      }
    }
    //------------------------for player One and computers two------------
    else if (document.getElementById("mySelect").value === "1") {
      if (playerOne === playerThree) {
        return this.setState({
          Result: "Oops it's a Tie!"
        });
      } else if (
        (playerOne === "Rock" && playerThree === "Scissors") ||
        (playerOne === "Scissors" && playerThree === "Paper") ||
        (playerOne === "Paper" && playerThree === "Rock")
      ) {
        if (playerScore < 2) {
          return this.setState({
            playerScore: playerScore + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer2Score: 0,
            Result: " Player One is Winner",
            playerScore: 0
          });
        }
      } else {
        if (Computer2Score < 2) {
          return this.setState({
            Computer2Score: Computer2Score + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer2Score: 0,
            Result: " Computer Two is Winner",
            playerScore: 0
          });
        }
      }
    }
    //------------------------for both computers------------
    else {
      if (playerTwo === playerThree) {
        return this.setState({
          Result: "Oops it's a Tie!"
        });
      } else if (
        (playerTwo === "Rock" && playerThree === "Scissors") ||
        (playerTwo === "Scissors" && playerThree === "Paper") ||
        (playerTwo === "Paper" && playerThree === "Rock")
      ) {
        if (Computer1Score < 2) {
          return this.setState({
            Computer1Score: Computer1Score + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer1Score: 0,
            Result: " computer one is Winner",
            Computer2Score: 0
          });
        }
      } else {
        if (Computer2Score < 2) {
          return this.setState({
            Computer2Score: Computer2Score + 1,
            Result: ""
          });
        } else {
          return this.setState({
            Computer1Score: 0,
            Result: " Computer Two is Winner",
            Computer2Score: 0
          });
        }
      }
    }
  };
  //-------------function to select weapon for player------------------
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      Result: ""
    });
  };
  //-----------------this function handel the changes in select option component---------------
  gameModeChangerHandler = mode => {
    this.setState({
      P1andC2Mode: mode,
      Computer1Score: 0,
      Result: "",
      Computer2Score: 0,
      playerScore: 0
    });
    if (mode === "2") {
      this.setState({
        selectV: true
      });
    } else {
      this.setState({
        selectV: false
      });
    }
  };
  render() {
    const {
      playerOne,
      playerTwo,
      playerScore,
      Computer1Score,
      Computer2Score,
      Result,
      P1andC2Mode,
      playerThree,
      selectV
    } = this.state;
    return (
      <div className="Wrapper">
        <div className="Container">
          <h1>{this.props.title}</h1>
          {/* -----------component for select options------------ */}
          <SelectOption
            select={Selectoptions}
            modeHandler={mode => this.gameModeChangerHandler(mode)}
            mySelect="mySelect"
          />
          {/* -----------component for players------------ */}
          <Player
            playerMode={P1andC2Mode}
            weapon={[playerOne, playerTwo, playerThree]}
            player={Players}
            score={[playerScore, Computer1Score, Computer2Score]}
          />
          {/* -----------component for control buttons------------ */}
          <Button
            clicked={id => this.selectWeapon(id)}
            Weapons={weapons}
            type="button"
            startClicked={this.startGame}
            Result={Result}
            selectV={selectV}
          />
        </div>
      </div>
    );
  }
}
export default Game;
