import React from "react";
import GameBoard from "../components/GameBoard";

export default function GameScreen() {
  return (
    <div className="game-screen">
      <h2>Spiel gegen die KI</h2>
      <GameBoard />
    </div>
  );
}
