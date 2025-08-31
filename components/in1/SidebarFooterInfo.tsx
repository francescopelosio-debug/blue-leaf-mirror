"use client";

type Props = { name?: string; email?: string; role?: string; plan?: string; };

export default function SidebarFooterInfo({
  name = "Tester",
  email = "tester@example.com",
  role = "user",
  plan = "free",
}: Props) {
  return (
    <div
      style={{
        padding: "12px",
        borderTop: "1px solid #2b2b2b",
        fontSize: 12,
        lineHeight: 1.5,
        color: "#d9d9d9",
        backgroundColor: "#181818",
        userSelect: "none",
      }}
      aria-label="Sidebar footer info"
    >
      <div style={{ opacity: 0.9 }}>{name}</div>
      <div style={{ opacity: 0.65 }}>{email}</div>
      <div style={{ marginTop: 6, opacity: 0.75 }}>{role} • {plan}</div>
    </div>
  );
}
