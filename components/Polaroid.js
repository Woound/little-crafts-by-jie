import Washi from "./Washi";
import { font, shadow, color, asset } from "@/lib/ui";

// A taped polaroid photo frame: white square frame, hard offset shadow, a washi
// strip across the top and a Caveat caption along the bottom. Used for the hero
// cluster, the home about-teaser and the about page.
export default function Polaroid({
  width,
  rotate = 0,
  padding = "12px 12px 44px",
  fill,
  fillHeight = 200,
  photo,
  washi = {},
  caption,
  captionColor = color.body,
  captionSize = 20,
  captionBottom = 14,
  boxShadow = shadow.cardSoft,
  style = {},
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        padding,
        boxShadow,
        transform: `rotate(${rotate}deg)`,
        width,
        ...style,
      }}
    >
      <Washi {...washi} />
      <div
        style={{
          height: fillHeight,
          background: fill,
          backgroundImage: photo ? `url(${asset(photo)})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {caption && (
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: captionBottom,
            textAlign: "center",
            fontFamily: font.hand,
            fontSize: captionSize,
            color: captionColor,
          }}
        >
          {caption}
        </span>
      )}
    </div>
  );
}
