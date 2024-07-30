import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptNumber }) {
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters,
  } = useContext(AppContext);

  const letter = board[attemptNumber][letterPosition];

  const correctLetter = correctWord[letterPosition] === letter;
  const rightLetterWrongLocation =
    !correctLetter && letter !== "" && correctWord.includes(letter);

  const letterState =
    currentAttempt.attemptNumber > attemptNumber &&
    (correctLetter ? "correct" : rightLetterWrongLocation ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correctLetter && !rightLetterWrongLocation) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
    console.log('these letters are disbaled now' +disabledLetters)
  }, [currentAttempt.attemptNumber]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
