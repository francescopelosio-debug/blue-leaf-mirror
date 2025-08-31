"use client";

export default function SidebarHeadbar() {
  return (
    <div
      style={{
        backgroundColor: "#181818",
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        color: "#ddd",
        userSelect: "none",
      }}
      aria-label="Sidebar headbar"
    >
      {/* Logo testuale placeholder */}
      <div style={{ fontWeight: 600, letterSpacing: 0.3 }}>IN-1</div>

      {/* Icona collapse placeholder (per ora solo quadratino) */}
      <div
        style={{
          width: 18,
          height: 18,
          border: "2px solid #aaa",
          borderRadius: 3,
          opacity: 0.7,
          cursor: "pointer",
        }}
        title="Collapse sidebar"
        onClick={() => console.log("collapse sidebar (placeholder)")}
      />
    </div>
  );
}
