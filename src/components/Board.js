import React, { useState } from "react";
import Letter from "./Letter.js";

function Board() {
  return (
    <>
      <div>board</div>
      <div className="board">
        <div className="row">
          <Letter letterPosition={0} attemptNumber={0} />
          <Letter letterPosition={1} attemptNumber={0} />
          <Letter letterPosition={2} attemptNumber={0} />
          <Letter letterPosition={3} attemptNumber={0} />
          <Letter letterPosition={4} attemptNumber={0} />
        </div>
        <div className="row">
          <Letter letterPosition={0} attemptNumber={1} />
          <Letter letterPosition={1} attemptNumber={1} />
          <Letter letterPosition={2} attemptNumber={1} />
          <Letter letterPosition={3} attemptNumber={1} />
          <Letter letterPosition={4} attemptNumber={1} />
        </div>
        <div className="row">
          <Letter letterPosition={0} attemptNumber={2} />
          <Letter letterPosition={1} attemptNumber={2} />
          <Letter letterPosition={2} attemptNumber={2} />
          <Letter letterPosition={3} attemptNumber={2} />
          <Letter letterPosition={4} attemptNumber={2} />
        </div>
        <div className="row">
          <Letter letterPosition={0} attemptNumber={3} />
          <Letter letterPosition={1} attemptNumber={3} />
          <Letter letterPosition={2} attemptNumber={3} />
          <Letter letterPosition={3} attemptNumber={3} />
          <Letter letterPosition={4} attemptNumber={3} />
        </div>
        <div className="row">
          <Letter letterPosition={0} attemptNumber={4} />
          <Letter letterPosition={1} attemptNumber={4} />
          <Letter letterPosition={2} attemptNumber={4} />
          <Letter letterPosition={3} attemptNumber={4} />
          <Letter letterPosition={4} attemptNumber={4} />
        </div>
        <div className="row">
          <Letter letterPosition={0} attemptNumber={5} />
          <Letter letterPosition={1} attemptNumber={5} />
          <Letter letterPosition={2} attemptNumber={5} />
          <Letter letterPosition={3} attemptNumber={5} />
          <Letter letterPosition={4} attemptNumber={5} />
        </div>
      </div>
    </>
  );
}

export default Board;
