import Washi from "./Washi";
import { placeholderFill, shadow } from "@/lib/ui";

const TILTS = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.2, -0.8];

// Striped placeholder polaroid shown while products are loading from the sheet.
export default function PlaceholderCard({ index = 0, photoHeight = 210 }) {
  const tilt = TILTS[index % TILTS.length];
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        background: "#fff",
        padding: "14px 14px 18px",
        boxShadow: shadow.card,
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <Washi
        width={72}
        height={22}
        rotate={-6}
        top={-10}
        alphaA={0.55}
        alphaB={0.3}
      />
      <div
        style={{
          height: photoHeight,
          background: placeholderFill,
        }}
      />
      <div style={{ padding: "16px 6px 4px" }}>
        <div
          style={{
            height: 16,
            width: "62%",
            borderRadius: 4,
            background: "rgba(137,113,91,0.16)",
          }}
        />
        <div
          style={{
            marginTop: 14,
            height: 38,
            borderRadius: 5,
            background: "rgba(137,113,91,0.12)",
          }}
        />
      </div>
    </div>
  );
}
