"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function HeadButton({ label, onClick }: { label: string; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "8px 10px",
        border: "1px solid #333",
        backgroundColor: hover ? "#272727" : "transparent",
        color: "#ddd",
        borderRadius: 16,
        cursor: "pointer",
        fontSize: 13,
      }}
      aria-label={label}
    >
      {label}
    </button>
  );
}

export default function ChatHeadbar({ model = "ENV model" }: { model?: string }) {
  const router = useRouter();
  const [now, setNow] = useState<string>("");

  // placeholder data/ora; in futuro si potrà cambiare con altre info
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#212121",
        height: 44,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 12px",
        color: "#ddd",
        userSelect: "none",
        columnGap: 8,
      }}
      aria-label="Chat headbar"
    >
      {/* sinistra: model */}
      <div style={{ fontSize: 12, opacity: 0.85, justifySelf: "start" }}>
        Model: {model}
      </div>

      {/* centro: slot informativo (ora data/ora) */}
      <div style={{ fontSize: 12, opacity: 0.7, textAlign: "center" }}>
        {now}
      </div>

      {/* destra: azioni */}
      <div style={{ display: "flex", gap: 8, justifySelf: "end" }}>
        <HeadButton label="Salva chat" onClick={() => console.log("save (placeholder)")} />
        <HeadButton
          label="Chiudi chat"
          onClick={() => {
            console.log("close (placeholder)");
            router.push("/home"); // home privata
          }}
        />
      </div>
    </div>
  );
}
