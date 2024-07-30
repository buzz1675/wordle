import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board.js";
import { defaultBoard, generateWordSet } from "./Word.js";
import { createContext, useEffect, useState } from "react";
import Keyboard from "./components/Keyboard.js";
import GameOver from "./components/GameOver.js";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attemptNumber: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWordCorrectly: false,
  });

  useEffect(() => {
    initialiseGame();
    setGameOver({ gameOver: false, guessedWordCorrectly: false });
  }, []);

  useEffect(() => {
    console.log("Updated correctWord:", correctWord);
  }, [correctWord]);

  const initialiseGame = async () => {
    generateWordSet().then((words) => {
      setWordSet(words.setOfWords);
      setCorrectWord(words.correctWord);
      console.log("Word set contents:", Array.from(words.setOfWords));
    });
  };

  const restartGame = async () => {
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setDisabledLetters([]);
    setCurrentAttempt({ attemptNumber: 0, letterPosition: 0 });
    setGameOver({ gameOver: false, guessedWordCorrectly: false });
    await initialiseGame();
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition < 5) {
      alert("need a word");
      return;
    }

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attemptNumber][i];
    }

    currentWord = currentWord.toLowerCase().trim();

    if (wordSet.has(currentWord)) {
      console.log("Word exists:", currentWord);
      setCurrentAttempt((prevAttempt) => ({
        letterPosition: 0,
        attemptNumber: prevAttempt.attemptNumber + 1,
      }));
    } else {
      alert("Word Not found");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWordCorrectly: true });
      return;
    }

    if (currentAttempt.attemptNumber === 5) {
      setGameOver({ gameOver: true, guessedWordCorrectly: false });
      return;
    }
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[currentAttempt.attemptNumber][currentAttempt.letterPosition - 1] =
      "";
    setBoard(newBoard);
    setCurrentAttempt((prevAttempt) => ({
      ...prevAttempt,
      letterPosition: prevAttempt.letterPosition - 1,
    }));
    return;
  };

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;

    const newBoard = [...board];
    newBoard[currentAttempt.attemptNumber][currentAttempt.letterPosition] =
      keyValue;
    setBoard(newBoard);
    setCurrentAttempt((prevAttempt) => ({
      ...prevAttempt,
      letterPosition: prevAttempt.letterPosition + 1,
    }));
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          correctWord,
          onDelete,
          onEnter,
          onSelectLetter,
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          disabledLetters,
          setDisabledLetters,
          gameOver,
        }}
      >
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        <button onClick={restartGame}>Restart</button>
      </AppContext.Provider>
    </div>
  );
}

export default App;
