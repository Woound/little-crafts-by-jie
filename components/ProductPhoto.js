import { placeholderFill, asset } from "@/lib/ui";

// The photo area of a product card: a striped placeholder, optionally overlaid
// with the cover image. Sold-out items desaturate slightly. `children` renders
// badges (category tag, sold-out stamp) on top. `fit` controls how the image
// fills its box ("cover" crops to fill, "contain" shows the whole image).
export default function ProductPhoto({
  photo,
  soldOut,
  height = 210,
  fit = "cover",
  background = placeholderFill,
  children,
}) {
  return (
    <div
      style={{
        height,
        position: "relative",
        background,
        overflow: "hidden",
      }}
    >
      {photo && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("${asset(photo).replace(/"/g, "%22")}")`,
            backgroundSize: fit,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: soldOut ? "grayscale(0.35) opacity(0.85)" : undefined,
          }}
        />
      )}
      {children}
    </div>
  );
}
