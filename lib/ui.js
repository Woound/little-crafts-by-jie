// lib/ui.js
// Shared design tokens from the handoff (clay palette is the shipped default).
// Font families resolve to the next/font CSS variables set in app/layout.js.

// On GitHub Pages *project* sites the app is served under /<repo>/. next/image
// and next/link apply that basePath automatically, but raw CSS background-image
// URLs do not, so prefix root-relative asset paths (e.g. /products/x.png)
// ourselves. Locally and on root/custom-domain sites BASE_PATH is "" (no-op).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p) =>
  typeof p === "string" && p.startsWith("/") ? BASE_PATH + p : p;

export const font = {
  display: "var(--font-baloo), cursive", // Baloo 2 — headings
  hand: "var(--font-caveat), cursive", // Caveat — handwriting accents / prices
  body: "var(--font-nunito), sans-serif", // Nunito Sans — body copy
};

export const color = {
  pageBg: "#F8F4EB",
  surface: "#ffffff",
  heading: "#3f3225",
  body: "#6b5743",
  base: "#4A3B2E",
  faint: "#9c8a6f",
  soldOut: "#a8705c",
  dash: "rgba(137,113,91,0.4)", // dashed "stitch" lines
  btnDash: "rgba(74,59,46,0.4)", // dashed button borders
};

export const shadow = {
  card: "4px 5px 0 rgba(74,59,46,0.14)",
  cardSoft: "4px 5px 0 rgba(74,59,46,0.16)",
  primary: "3px 3px 0 rgba(74,59,46,0.22)",
  secondary: "3px 3px 0 rgba(74,59,46,0.1)",
  note: "3px 4px 0 rgba(74,59,46,0.14)",
  noteSoft: "3px 4px 0 rgba(74,59,46,0.12)",
  badge: "1px 1px 0 rgba(74,59,46,0.2)",
};

// Decorative washi-tape background (45° striped). Pass a tint rgba string.
export function washiTape(tint = "rgba(199,138,114,") {
  return `repeating-linear-gradient(45deg, ${tint}0.6) 0 7px, ${tint}0.32) 7px 14px)`;
}

// Striped "no photo yet" placeholder fill.
export const placeholderFill =
  "repeating-linear-gradient(135deg,#EFE7D3 0 14px,#E7DBC2 14px 28px)";

// Primary button base style (accent fill, white text, inset dashed outline).
export const primaryBtn = {
  background: "var(--accent)",
  color: "#fff",
  fontFamily: font.display,
  fontWeight: 600,
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: shadow.primary,
  outline: "1.5px dashed rgba(255,255,255,0.75)",
  outlineOffset: -6,
};

// Secondary button base style (white fill, dashed border).
export const secondaryBtn = {
  background: "#fff",
  color: "#5c4a39",
  fontFamily: font.display,
  fontWeight: 600,
  border: `1.5px dashed ${color.btnDash}`,
  borderRadius: 6,
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: shadow.secondary,
};
