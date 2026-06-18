// Decorative washi-tape strip, absolutely positioned over a polaroid frame.
// `tint` is the rgba prefix (without the trailing alpha+paren), e.g.
// 'rgba(199,138,114,' for clay or 'rgba(156,166,132,' for sage.
export default function Washi({
  width = 78,
  height = 24,
  rotate = -7,
  tint = "rgba(199,138,114,",
  top = -10,
  alphaA = 0.6,
  alphaB = 0.32,
  band = 7,
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top,
        left: "50%",
        width,
        height,
        marginLeft: -(width / 2),
        background: `repeating-linear-gradient(45deg, ${tint}${alphaA}) 0 ${band}px, ${tint}${alphaB}) ${band}px ${band * 2}px)`,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}
