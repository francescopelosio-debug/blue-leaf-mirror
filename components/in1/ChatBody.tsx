"use client";

import { useState } from "react";

export default function ChatBody() {
  const [value, setValue] = useState("");

  // larghezza massima del box chat
  const MAX_W = 860;

  return (
    <div
      aria-label="Chat body"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        // niente divisori, gestiamo spaziature
        backgroundColor: "#212121",
      }}
    >
      {/* area centrale scrollabile con box centrato */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: MAX_W,
            padding: "16px 16px 24px",
            color: "#e5e5e5",
          }}
        >
          {/* thread mock */}
          <div style={{ opacity: 0.6, fontSize: 13 }}>
            Thread vuoto — pronto per i test (mock).
          </div>
        </div>
      </div>

      {/* composer boxed centrato, non full width */}
      <div
        aria-label="Composer"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "12px 16px 16px",
          backgroundColor: "#212121",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: MAX_W,
            display: "flex",
            alignItems: "center",
            gap: 8,
            // box “sollevato” con aria attorno
            padding: 8,
            border: "1px solid #333",
            borderRadius: 12,
            backgroundColor: "#212121",
          }}
        >
          {/* pulsante + per allegati (placeholder) */}
          <button
            type="button"
            aria-label="Aggiungi allegati"
            title="Aggiungi allegati"
            onClick={() => console.log("add files (placeholder)")}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #333",
              backgroundColor: "transparent",
              color: "#ddd",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: "32px",
            }}
          >
            +
          </button>

          {/* textarea */}
          <textarea
            aria-label="Messaggio"
            placeholder="Scrivi un messaggio…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={1}
            style={{
              flex: 1,
              resize: "none",
              padding: "10px 12px",
              backgroundColor: "#1c1c1c",
              border: "1px solid #333",
              borderRadius: 10,
              color: "#e5e5e5",
              outline: "none",
              minHeight: 40,
            }}
          />

          {/* pulsante tondo extra (placeholder) */}
          <button
            type="button"
            aria-label="Azione extra"
            title="Azione extra"
            onClick={() => console.log("extra action (placeholder)")}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #333",
              backgroundColor: "transparent",
              color: "#ddd",
              cursor: "pointer",
            }}
          />

          {/* pulsante tondo invia (placeholder) */}
          <button
            type="button"
            aria-label="Invia"
            title="Invia"
            onClick={() => console.log("send (placeholder)", value)}
            disabled={!value.trim()}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #333",
              backgroundColor: "transparent",
              color: "#ddd",
              cursor: value.trim() ? "pointer" : "not-allowed",
              opacity: value.trim() ? 1 : 0.5,
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
