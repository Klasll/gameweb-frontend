import React, { useEffect, useState, useRef } from "react";

const WebSocketLog = ({ url }) => {
  const [logs, setLogs] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onopen = () => {
      appendLog("🟢 Verbunden mit Server");
    };

    socketRef.current.onmessage = (event) => {
      appendLog("📩 Server: " + event.data);
    };

    socketRef.current.onclose = () => {
      appendLog("🔴 Verbindung geschlossen");
    };

    socketRef.current.onerror = (error) => {
      appendLog("⚠️ Fehler: " + error.message);
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  const appendLog = (text) => {
    setLogs((prevLogs) => [...prevLogs, text]);
  };

  const sendMessage = (msg) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
      appendLog("➡️ Du: " + msg);
    }
  };

  return (
    <div>
      <div
        id="log"
        style={{
          height: "150px",
          overflowY: "auto",
          backgroundColor: "#222",
          color: "#eee",
          padding: "10px",
          marginBottom: "10px",
          fontFamily: "monospace",
          fontSize: "14px",
          borderRadius: "4px",
        }}
      >
        {logs.map((log, idx) => (
          <p key={idx} style={{ margin: 0 }}>
            {log}
          </p>
        ))}
      </div>
      <input
        type="text"
        id="input"
        placeholder="Nachricht eingeben..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value.trim()) {
            sendMessage(e.target.value.trim());
            e.target.value = "";
          }
        }}
        style={{ width: "100%", padding: "8px", fontSize: "14px" }}
      />
    </div>
  );
};

export default WebSocketLog;
