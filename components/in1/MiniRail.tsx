"use client";

function RailIcon({ title }: { title: string }) {
  return (
    <div
      title={title}
      aria-label={title}
      onClick={() => console.log(`${title} (placeholder)`)}
      style={{
        width: 28,
        height: 28,
        borderRadius: 6,
        border: "1px solid #333",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    />
  );
}

export default function MiniRail() {
  return (
    <div
      aria-label="Mini rail"
      style={{
        width: 56,
        minWidth: 56,
        height: "100%",
        backgroundColor: "#141414", // più scuro della sidebar #181818
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 8,
        color: "#ddd",
      }}
    >
      {/* Top icon */}
      <div style={{ paddingTop: 6, paddingBottom: 6 }}>
        <RailIcon title="Icona top" />
      </div>

      {/* Spacer centrale per spingere l'altra icona in basso */}
      <div style={{ flex: 1 }} />

      {/* Bottom icon */}
      <div style={{ paddingTop: 6, paddingBottom: 6 }}>
        <RailIcon title="Icona bottom" />
      </div>
    </div>
  );
}
