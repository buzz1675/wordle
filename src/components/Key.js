import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyValue, bigKey, disabled }) {
  const {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    onDelete,
    onEnter,
    onSelectLetter,
  } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div
      value={keyValue}
      className="key"
      id={bigKey ? "bigKey" : disabled && "disabled"}
      onClick={disabled ? null : selectLetter}
    >
      {keyValue}
    </div>
  );
}

export default Key;
