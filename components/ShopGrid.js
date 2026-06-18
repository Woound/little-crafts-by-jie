"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/lib/useShopData";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import PlaceholderCard from "./PlaceholderCard";
import { font, color } from "@/lib/ui";

const TABS = ["all", "all-time", "limited", "one-time"];

export default function ShopGrid() {
  const products = useProducts();
  const searchParams = useSearchParams();
  const requested = searchParams.get("category");
  const [filter, setFilter] = useState(
    TABS.includes(requested) ? requested : "all",
  );
  const [active, setActive] = useState(null);

  const loading = products === null;
  const filtered = loading
    ? []
    : filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          margin: "30px 0 36px",
        }}
      >
        {TABS.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              className="nudge"
              onClick={() => setFilter(key)}
              style={{
                padding: "9px 20px",
                borderRadius: 5,
                border: `1.5px dashed ${active ? "transparent" : color.btnDash}`,
                background: active ? "var(--accent)" : "#fff",
                color: active ? "#fff" : "#6b5743",
                fontFamily: font.display,
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: active
                  ? "2px 2px 0 rgba(74,59,46,0.2)"
                  : "2px 2px 0 rgba(74,59,46,0.08)",
                outline: active
                  ? "1.5px dashed rgba(255,255,255,0.7)"
                  : undefined,
                outlineOffset: active ? -5 : undefined,
              }}
            >
              {key}
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="lc-grid-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <PlaceholderCard key={i} index={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            fontFamily: font.hand,
            fontSize: 26,
            color: color.faint,
          }}
        >
          nothing here just yet, do check back soon! ♥
        </div>
      ) : (
        <div className="lc-grid-3">
          {filtered.map((p, i) => (
            <ProductCard
              key={`${p.name}-${i}`}
              product={p}
              index={i}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>
      )}

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
