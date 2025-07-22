const log = document.getElementById("log");
const input = document.getElementById("input");

// WebSocket-Verbindung aufbauen (automatisch wss:// bei https-Seite)
const socket = new WebSocket("wss://gameweb-backend.onrender.com");

socket.onopen = () => {
  appendLog("🟢 Verbunden mit Server");
};

socket.onmessage = (event) => {
  appendLog("📩 Server: " + event.data);
};

socket.onclose = () => {
  appendLog("🔴 Verbindung geschlossen");
};

function sendMessage() {
  const msg = input.value.trim();
  if (msg) {
    socket.send(msg);
    appendLog("➡️ Du: " + msg);
    input.value = "";
  }
}

function appendLog(text) {
  const p = document.createElement("p");
  p.textContent = text;
  log.appendChild(p);
}
