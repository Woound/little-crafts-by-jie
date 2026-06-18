"use client";

import { useCommissionsOpen } from "@/lib/useShopData";
import { font, shadow, color } from "@/lib/ui";

// Commissions page status note ("the form is currently open/closed").
export default function CommissionStatusNote() {
  const open = useCommissionsOpen();
  const statusBg = open ? "#E2EBC8" : "#F3E7C0";
  const statusDot = open ? "#8DA86A" : "#B9A77F";
  const statusLabel = open ? "open" : "closed";

  return (
    <div
      style={{
        background: statusBg,
        borderRadius: 4,
        padding: "20px 26px",
        margin: "26px 0 38px",
        boxShadow: shadow.note,
        transform: "rotate(-0.6deg)",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <span
        style={{
          width: 13,
          height: 13,
          borderRadius: "50%",
          background: statusDot,
          flex: "none",
          boxShadow: "0 0 0 4px rgba(255,255,255,0.6)",
        }}
      />
      <div
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: 19,
          color: color.base,
        }}
      >
        the form is currently {statusLabel}
      </div>
    </div>
  );
}
