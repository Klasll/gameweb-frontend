import React, { useState } from "react";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <GameScreen />
      )}
    </>
  );
}
