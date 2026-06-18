"use client";

import Link from "next/link";
import { useProducts } from "@/lib/useShopData";
import ProductPhoto from "./ProductPhoto";
import PlaceholderCard from "./PlaceholderCard";
import { font, shadow, color } from "@/lib/ui";

const TILTS = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.2, -0.8];
const CATS = ["all-time", "limited", "one-time"];

function NewestCard({ product, index }) {
  const tilt = TILTS[index % TILTS.length];
  return (
    <Link
      href="/shop"
      className="nudge"
      style={{
        textAlign: "left",
        background: "#fff",
        textDecoration: "none",
        padding: "14px 14px 20px",
        boxShadow: shadow.card,
        transform: `rotate(${tilt}deg)`,
        position: "relative",
        display: "block",
      }}
    >
      <ProductPhoto
        photo={product.photo}
        soldOut={product.soldOut}
        height={180}
      >
        {product.soldOut && (
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#fff",
              color: color.soldOut,
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 4,
              transform: "rotate(5deg)",
              boxShadow: "1px 1px 0 rgba(74,59,46,0.18)",
            }}
          >
            sold out
          </span>
        )}
      </ProductPhoto>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 8,
          marginTop: 14,
        }}
      >
        <span
          style={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: 18,
            color: color.heading,
          }}
        >
          {product.name}
        </span>
        <span
          style={{
            fontFamily: font.hand,
            fontWeight: 700,
            fontSize: 23,
            color: "var(--accent-deep)",
            whiteSpace: "nowrap",
          }}
        >
          {product.priceLabel}
        </span>
      </div>
    </Link>
  );
}

export default function FreshFromHook() {
  const products = useProducts();
  const loading = products === null;

  // Hide the whole section once we know there are no products at all.
  if (!loading && products.length === 0) return null;

  const newest = loading ? [] : products.slice(0, 3);

  return (
    <section
      className="lc-pad"
      style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 28px 24px" }}
    >
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: font.display,
            fontWeight: 700,
            fontSize: "clamp(27px, 6vw, 34px)",
            margin: 0,
            color: color.heading,
          }}
        >
          fresh from the hook
        </h2>
        <p
          style={{
            fontFamily: font.hand,
            fontSize: 22,
            color: "var(--accent-deep)",
            margin: "6px 0 0",
          }}
        >
          my newest little makes ♥
        </p>
      </div>

      <div className="lc-grid-3" style={{ "--lc-gap": "32px" }}>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <PlaceholderCard key={i} index={i} photoHeight={180} />
            ))
          : newest.map((p, i) => (
              <NewestCard key={`${p.name}-${i}`} product={p} index={i} />
            ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          marginTop: 34,
        }}
      >
        <span
          style={{ fontFamily: font.hand, fontSize: 20, color: color.faint }}
        >
          browse by:
        </span>
        {CATS.map((c) => (
          <Link
            key={c}
            href={`/shop?category=${c}`}
            className="nudge"
            style={{
              background: "#fff",
              border: "1.5px dashed rgba(74,59,46,0.35)",
              color: "#6b5743",
              fontFamily: font.display,
              fontWeight: 600,
              fontSize: 14,
              padding: "8px 18px",
              borderRadius: 5,
              textDecoration: "none",
              boxShadow: "2px 2px 0 rgba(74,59,46,0.08)",
            }}
          >
            {c}
          </Link>
        ))}
      </div>
    </section>
  );
}
