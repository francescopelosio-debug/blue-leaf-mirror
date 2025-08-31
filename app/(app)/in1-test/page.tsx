import MiniRail from "@/components/in1/MiniRail";
import Sidebar from "@/components/in1/Sidebar";
import ChatHeadbar from "@/components/in1/ChatHeadbar";
import ChatBody from "@/components/in1/ChatBody";

export const dynamic = "force-dynamic";

// Altezza header globale stimata: 56px
const HEADER_H = 56;

export default function In1TestPage() {
  return (
    <div
      style={{
        display: "flex",
        height: `calc(100dvh - ${HEADER_H}px)`,
        overflow: "hidden",
        backgroundColor: "#212121",
      }}
    >
      {/* Mini-rail sottile a sinistra */}
      <MiniRail />

      {/* Sidebar principale */}
      <Sidebar />

      {/* Area chat */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <ChatHeadbar model="Mixtral (ENV)" />
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <ChatBody />
        </div>
      </main>
    </div>
  );
}
