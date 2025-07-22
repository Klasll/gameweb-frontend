import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Willkommen zu Gameweb</h1>
      <button onClick={onStart}>Spiel starten</button>
    </div>
  );
}
