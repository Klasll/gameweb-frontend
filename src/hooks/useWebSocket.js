import { useEffect, useRef, useState, useCallback } from "react";

const useWebSocket = (url) => {
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

  const appendLog = useCallback(
    (text) => {
      setLogs((prevLogs) => [...prevLogs, text]);
    },
    [setLogs]
  );

  const sendMessage = useCallback(
    (msg) => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(msg);
        appendLog("➡️ Du: " + msg);
      }
    },
    [appendLog]
  );

  return { logs, sendMessage };
};

export default useWebSocket;
