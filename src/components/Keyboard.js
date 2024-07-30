import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onDelete, onEnter, onSelectLetter, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const keys2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const keys3 = ["z", "x", "c", "v", "b", "n", "m"];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else if (!disabledLetters.includes(event.key)){
      keys1.forEach((key) => {
        if (key === event.key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (key === event.key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (key === event.key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <>
      <div>keyboard</div>
      <div className="keyboard">
        <div className="line1">
          {keys1.map((key) => {
            return (
              <Key keyValue={key} disabled={disabledLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line2">
          {keys2.map((key) => {
            return (
              <Key keyValue={key} disabled={disabledLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line3">
          <Key keyValue={"ENTER"} bigKey />
          {keys3.map((key) => {
            return (
              <Key keyValue={key} disabled={disabledLetters.includes(key)} />
            );
          })}
          <Key keyValue={"DELETE"} bigKey />
        </div>
      </div>
    </>
  );
}

export default Keyboard;
