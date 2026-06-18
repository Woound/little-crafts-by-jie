"use client";

import Link from "next/link";
import { useCommissionsOpen } from "@/lib/useShopData";
import { font, shadow, color } from "@/lib/ui";

// Home sticky-note banner. Reflects the live commissions-open flag from the
// settings sheet (closed until the sheet says yes).
export default function CommissionBanner() {
  const open = useCommissionsOpen();
  const statusBg = open ? "#E2EBC8" : "#F3E7C0";
  const statusDot = open ? "#8DA86A" : "#B9A77F";
  const statusLabel = open ? "open" : "closed";

  return (
    <section
      style={{ maxWidth: 1140, margin: "34px auto 0", padding: "0 28px" }}
    >
      <div
        style={{
          background: statusBg,
          borderRadius: 4,
          padding: "22px 28px",
          boxShadow: shadow.note,
          transform: "rotate(-0.6deg)",
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -11,
            left: 40,
            width: 96,
            height: 26,
            background:
              "repeating-linear-gradient(45deg,rgba(199,138,114,0.55) 0 7px,rgba(199,138,114,0.3) 7px 14px)",
            transform: "rotate(-4deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
          <div>
            <div
              style={{
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: 19,
                color: color.base,
              }}
            >
              commissions are currently {statusLabel}
            </div>
            <div
              style={{
                fontFamily: font.hand,
                fontSize: 18,
                color: color.body,
                marginTop: 2,
              }}
            >
              i post all my updates on instagram stories, so keep an eye out! ♥
            </div>
          </div>
        </div>
        <Link
          href="/commissions"
          className="nudge"
          style={{
            background: "#fff",
            color: "#5c4a39",
            border: `1.5px dashed ${color.btnDash}`,
            padding: "11px 20px",
            borderRadius: 5,
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            boxShadow: shadow.secondary,
          }}
        >
          how it works
        </Link>
      </div>
    </section>
  );
}
