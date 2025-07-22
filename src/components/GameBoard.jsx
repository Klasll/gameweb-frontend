import React from "react";
import Unit from "./Unit";

const GameBoard = ({ units }) => {
  return (
    <div className="game-board" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "10px" }}>
      {units.map((unit, index) => (
        <Unit key={index} unit={unit} />
      ))}
    </div>
  );
};

export default GameBoard;
