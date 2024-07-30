import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver } = useContext(AppContext);

  return (
    <div>
      <h1>GameOver</h1>
      <h3>
        {gameOver.guessedWordCorrectly
          ? "You correctly guessed the word!"
          : "You did not manage to guess the word"}
      </h3>
    </div>
  );
}

export default GameOver;
