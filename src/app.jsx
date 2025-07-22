import { useState } from "react";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        <GameScreen />
      ) : (
        <StartScreen onStart={() => setStarted(true)} />
      )}
    </>
  );
}

export default App;
