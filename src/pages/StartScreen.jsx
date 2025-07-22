import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Willkommen bei Gameweb</h1>
      <button onClick={onStart} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
        Start
      </button>
    </div>
  );
}
