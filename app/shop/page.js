import { Suspense } from "react";
import Link from "next/link";
import ShopGrid from "@/components/ShopGrid";
import { font, color } from "@/lib/ui";

export const metadata = {
  title: "the shop — little crafts by jie",
};

export default function ShopPage() {
  return (
    <main
      className="lc-pad"
      style={{ maxWidth: 1140, margin: "0 auto", padding: "56px 28px 84px" }}
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
        the shop
      </h1>
      <p
        style={{
          fontFamily: font.hand,
          fontSize: 22,
          color: "var(--accent-deep)",
          margin: "6px 0 0",
        }}
      >
        see something you love? tap <em>request / commission</em> and i’ll sort
        it out with you ♥
      </p>
      <p style={{ fontSize: 16, color: color.body, margin: "10px 0 0" }}>
        not sure on sizing?{" "}
        <Link
          href="/size-guide"
          style={{ color: "var(--accent-deep)", fontWeight: 700 }}
        >
          check the size guide
        </Link>
        .
      </p>

      <Suspense fallback={null}>
        <ShopGrid />
      </Suspense>
    </main>
  );
}
