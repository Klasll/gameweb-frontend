import React, { useState } from "react";

import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

export default function App() {
  const [started, setStarted] = useState(false);

  console.log("AppTemp render");

  return (
    <>
      <div style={{ color: "white", fontSize: "24px" }}>TEST SICHTBAR</div>
      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <GameScreen />
      )}
    </>
  );
}
