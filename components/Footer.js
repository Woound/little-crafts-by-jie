import LogoBadge from "./LogoBadge";
import { font, color } from "@/lib/ui";

export default function Footer() {
  return (
    <footer style={{ borderTop: `2.5px dashed ${color.dash}`, marginTop: 10 }}>
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "34px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <LogoBadge size={40} />
          <span
            style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: 17,
              color: color.base,
            }}
          >
            little crafts by jie
          </span>
        </div>
        <div
          style={{ fontFamily: font.hand, fontSize: 19, color: color.faint }}
        >
          © 2026 little crafts by jie · all handmade · uk delivery only
        </div>
      </div>
    </footer>
  );
}
