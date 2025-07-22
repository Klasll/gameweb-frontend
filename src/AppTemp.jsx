import React, { useState } from "react";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

export default function AppTemp() {
  const [started, setStarted] = useState(false);

  console.log("started:", started); // Debug-Ausgabe

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
