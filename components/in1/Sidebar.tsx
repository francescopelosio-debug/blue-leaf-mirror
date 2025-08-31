"use client";

import SidebarHeadbar from "./SidebarHeadbar";
import SidebarFooterInfo from "./SidebarFooterInfo";
import { useState } from "react";

function SidebarButton({ label }: { label: string }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => console.log(label)}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "10px 12px",
        backgroundColor: hover ? "#1f1f1f" : "transparent",
        border: "none",
        color: "#ddd",
        cursor: "pointer",
        fontSize: 14,
      }}
      aria-label={label}
    >
      {label}
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 280,
        minWidth: 280,
        height: "100%",
        backgroundColor: "#181818",
        display: "flex",
        flexDirection: "column",
        color: "#ddd",
        borderRight: "1px solid #2b2b2b",
      }}
      aria-label="Sidebar"
    >
      <SidebarHeadbar />

      {/* Body con due pulsanti placeholder */}
      <div style={{ paddingTop: 8, paddingBottom: 8 }}>
        <SidebarButton label="Nuova chat" />
        <SidebarButton label="Altro pulsante" />
      </div>

      {/* Footer info tester */}
      <div style={{ marginTop: "auto" }}>
        <SidebarFooterInfo />
      </div>
    </aside>
  );
}
