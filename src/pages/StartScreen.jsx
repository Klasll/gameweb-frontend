export default function StartScreen({ onStart }) {
  return (
    <div>
      <h1>Willkommen zu Gameweb</h1>
      <button onClick={onStart}>Spiel starten</button>
    </div>
  );
}
