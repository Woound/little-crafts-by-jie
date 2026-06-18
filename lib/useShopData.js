"use client";
// lib/useShopData.js
// Client-side hooks that wrap the verbatim data layer in lib/shop.js, with a
// graceful local-seed fallback so the site renders during development (before
// Jie's published CSV URLs are pasted in) and if a live fetch ever fails.
import { useEffect, useState } from "react";
import {
  SHEET_CSV_URL,
  SETTINGS_CSV_URL,
  fetchProducts,
  fetchCommissionsOpen,
  normalizeProducts,
} from "./shop";
import { seed } from "./seed";

const sheetConfigured = !!SHEET_CSV_URL && !SHEET_CSV_URL.startsWith("PASTE_");
const settingsConfigured =
  !!SETTINGS_CSV_URL && !SETTINGS_CSV_URL.startsWith("PASTE_");

const seedProducts = () => normalizeProducts(seed);

// Returns null while loading, then an array of normalized products.
export function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    let active = true;
    if (!sheetConfigured) {
      setProducts(seedProducts());
      return () => {
        active = false;
      };
    }
    fetchProducts()
      .then((p) => {
        if (active) setProducts(p.length ? p : seedProducts());
      })
      .catch(() => {
        if (active) setProducts(seedProducts());
      });
    return () => {
      active = false;
    };
  }, []);

  return products;
}

// Returns the commissions-open flag (defaults to false until the sheet says yes).
export function useCommissionsOpen() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!settingsConfigured) return;
    let active = true;
    fetchCommissionsOpen()
      .then((v) => {
        if (active) setOpen(v);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return open;
}
