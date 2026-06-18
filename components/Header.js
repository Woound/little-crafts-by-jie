"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoBadge from "./LogoBadge";
import { font, color } from "@/lib/ui";

const NAV = [
  { href: "/", label: "home" },
  { href: "/shop", label: "shop" },
  { href: "/size-guide", label: "size guide" },
  { href: "/about", label: "about" },
  { href: "/commissions", label: "commissions" },
  { href: "/contact", label: "contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,237,216,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: `2.5px dashed ${color.dash}`,
      }}
    >
      <div
        className="lc-header-inner lc-pad"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "14px 28px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <LogoBadge size={46} />
          <span
            style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span
              style={{
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: 21,
                color: color.heading,
              }}
            >
              little crafts by jie
            </span>
            <span
              style={{
                fontFamily: font.hand,
                fontSize: 16,
                color: "var(--accent-deep)",
              }}
            >
              all handmade, all by me ♥
            </span>
          </span>
        </Link>

        <nav className="lc-nav">
          {NAV.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className="nav-link"
                style={{
                  position: "relative",
                  textDecoration: "none",
                  fontFamily: font.display,
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#5c4a39",
                  padding: "8px 14px",
                }}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 6,
                      right: 6,
                      top: "50%",
                      height: "64%",
                      transform: "translateY(-50%) rotate(-1.5deg)",
                      background: "var(--hi)",
                      borderRadius: 5,
                      zIndex: 0,
                      boxShadow: "1.5px 1.5px 0 rgba(74,59,46,0.1)",
                    }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>
                  {n.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
