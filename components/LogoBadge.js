import { font, shadow } from "@/lib/ui";

// Round clay logo badge with a white heart and a dashed inset outline,
// rotated -6deg. Sizes used in the handoff: 46px (header), 40px (footer).
export default function LogoBadge({ size = 46 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--accent)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.43),
        flex: "none",
        boxShadow: shadow.badge,
        outline: "1.5px dashed rgba(255,255,255,0.8)",
        outlineOffset: -6,
        transform: "rotate(-6deg)",
        fontFamily: font.body,
      }}
    >
      ♥
    </span>
  );
}
