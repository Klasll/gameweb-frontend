import React, { useState } from "react";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      {!gameStarted && <StartScreen onStart={() => setGameStarted(true)} />}
      {gameStarted && <GameScreen />}
    </>
  );
}
