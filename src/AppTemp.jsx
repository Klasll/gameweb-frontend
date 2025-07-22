import React, { useState } from "react";

console.log("AppTemp Komponente geladen");

import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

export default function App() {
  const [started, setStarted] = useState(false);
  console.log("AppTemp render");

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
