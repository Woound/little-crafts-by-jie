import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { font, shadow, color, asset } from "@/lib/ui";

export const metadata = {
  title: "size guide — little crafts by jie",
};

// Standalone size-guide page. Shows Jie's hand-drawn measurements sketch as a
// visual reference. Each product also carries its own `size` (from the sheet)
// shown on its card + pop-out. To extend this later, Jie just swaps the image
// at /public/test-products/metrics-measurements.png (or points it elsewhere).
export default function SizeGuidePage() {
  return (
    <main
      className="lc-pad"
      style={{ maxWidth: 880, margin: "0 auto", padding: "56px 28px 84px" }}
    >
      <h1
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: "clamp(30px, 7vw, 40px)",
          margin: 0,
          color: color.heading,
        }}
      >
        size guide
      </h1>
      <p
        style={{
          fontFamily: font.hand,
          fontSize: 22,
          color: "var(--accent-deep)",
          margin: "6px 0 0",
        }}
      >
        a quick look at how big my little makes are ♥
      </p>
      <p
        style={{
          fontSize: 17,
          lineHeight: 1.7,
          color: "#5c4a39",
          margin: "16px 0 0",
          maxWidth: "34em",
        }}
      >
        every piece also shows its own measurements on its card and in the
        pop-out. these are approximate — each one is handmade, so there’s always
        a little natural variation.
      </p>

      <figure
        style={{
          position: "relative",
          background: "#fff",
          padding: 18,
          margin: "34px auto 0",
          maxWidth: 640,
          boxShadow: shadow.card,
          transform: "rotate(-0.6deg)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -12,
            left: 34,
            zIndex: 2,
            width: 96,
            height: 26,
            background:
              "repeating-linear-gradient(45deg,rgba(199,138,114,0.55) 0 7px,rgba(199,138,114,0.3) 7px 14px)",
            transform: "rotate(-5deg)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            background: "#FBF6E9",
          }}
        >
          <Image
            src={asset("/test-products/metrics-measurements.png")}
            alt="hand-drawn measurements guide showing leg warmers, drawstring pouches and small bags"
            fill
            priority
            unoptimized
            sizes="(max-width: 700px) 100vw, 640px"
            style={{ objectFit: "contain" }}
          />
        </div>

        <figcaption
          style={{
            marginTop: 12,
            textAlign: "center",
            fontFamily: font.hand,
            fontSize: 19,
            color: color.faint,
          }}
        >
          measurements are approximate ♥
        </figcaption>
      </figure>

      <div
        style={{ marginTop: 36, display: "flex", gap: 16, flexWrap: "wrap" }}
      >
        <LinkButton href="/shop" variant="primary">
          back to the shop
        </LinkButton>
        <LinkButton href="/commissions" variant="secondary">
          commission something
        </LinkButton>
      </div>
    </main>
  );
}
