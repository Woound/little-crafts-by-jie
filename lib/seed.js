// lib/seed.js
// Local fallback catalogue used while the published Google-Sheet CSV URLs in
// `lib/shop.js` are still placeholders (or if the live fetch fails). Once Jie's
// real CSV URLs are pasted into `lib/shop.js`, the live sheet takes over and
// this seed is only used as a graceful fallback.
//
// For local testing, these point at the real images Jie dropped into
// `public/test-products/`. Any photo_url that isn't present simply falls back
// to the striped placeholder — nothing breaks.
export const seed = [
  {
    name: "heart keychain — red",
    price: "6",
    category: "all-time",
    in_stock: "yes",
    description:
      "a little crocheted heart in cherry red to clip onto your keys, bag or pencil case. made with soft cotton yarn and a sturdy clasp.",
    photo_url: "/test-products/crochet-heart-keychain-red.png",
  },
  {
    name: "heart keychain — hot pink",
    price: "6",
    category: "all-time",
    in_stock: "yes",
    description:
      "a bright hot-pink crochet heart keychain — soft, squishy and just the right size to brighten up your everyday bits.",
    photo_url: "/test-products/crochet-heart-keychain-hot-pink.png",
  },
  {
    name: "heart keychain — light pink",
    price: "6",
    category: "all-time",
    in_stock: "yes",
    description:
      "a soft pastel-pink crochet heart to clip wherever you like. made one at a time with cotton yarn and lots of love.",
    photo_url: "/test-products/crochet-heart-keychain-light-pink.png",
  },
  {
    name: "heart keychain — plum",
    price: "6",
    category: "all-time",
    in_stock: "no",
    description:
      "a deep plum crochet heart keychain — the cosy autumn colourway. currently sold out, but message me to request one.",
    photo_url: "/test-products/crochet-heart-keychain-plum.png",
  },
  {
    name: "heart keychain bundle",
    price: "20",
    category: "limited",
    in_stock: "yes",
    description:
      "a set of my mini crochet hearts in a mix of colours — perfect for gifting, or keeping a few and sharing the rest.",
    photo_url: "/test-products/multiple-crochet-heart-keychains.png",
  },
  {
    name: "star jar keychain",
    price: "8",
    category: "one-time",
    in_stock: "yes",
    description:
      "a tiny crocheted jar filled with little stars — a sweet good-luck charm for your keys or bag. a one-off make.",
    photo_url: "/test-products/star-jar-keychains.png",
  },
  {
    name: "mini drawstring pouch — brown",
    price: "14",
    category: "limited",
    in_stock: "yes",
    size: "12 × 11.5 cm",
    description:
      "a wee crocheted pouch with a drawstring top in warm brown — just right for coins, earphones or little treasures.",
    photo_url: "/test-products/mini-drawstring-pouch-brown.png",
  },
  {
    name: "mini drawstring pouch — cream",
    price: "14",
    category: "limited",
    in_stock: "yes",
    size: "12 × 11.5 cm",
    description:
      "a soft cream drawstring pouch — a neutral little carry-all for your tiny bits and bobs. pulls closed snugly.",
    photo_url: "/test-products/mini-drawstring-pouch-cream-white.png",
  },
  {
    name: "mini drawstring pouch — grey",
    price: "14",
    category: "limited",
    in_stock: "yes",
    size: "12 × 11.5 cm",
    description:
      "a calm grey drawstring pouch, hooked up by hand — perfect for keeping small treasures tucked away safely.",
    photo_url: "/test-products/mini-drawstring-pouch-grey.png",
  },
  {
    name: "mini drawstring pouch — dark grey",
    price: "14",
    category: "limited",
    in_stock: "no",
    size: "12 × 11.5 cm",
    description:
      "a deep charcoal drawstring pouch with a cinch top. currently sold out — drop me a request and i'll make you one.",
    photo_url: "/test-products/mini-drawstring-pouch-dark-grey.png",
  },
  {
    name: "small bag — black",
    price: "24",
    category: "all-time",
    in_stock: "yes",
    size: "26.5 × 18 cm (excl. handle)",
    description:
      "a roomy little handmade bag in classic black with a sturdy handle — great for everyday bits and short trips out.",
    photo_url: "/test-products/black-small-bag.png",
  },
  {
    name: "small bag — navy",
    price: "24",
    category: "all-time",
    in_stock: "yes",
    size: "26.5 × 18 cm (excl. handle)",
    description:
      "a deep navy crochet bag with a comfy handle — a versatile everyday make that goes with just about everything.",
    photo_url: "/test-products/navy-small-bag.png",
  },
  {
    name: "small bag — cream",
    price: "24",
    category: "all-time",
    in_stock: "yes",
    size: "26.5 × 18 cm (excl. handle)",
    description:
      "a soft cream handmade bag — light, neutral and roomy enough for your everyday essentials. handle included.",
    photo_url: "/test-products/cream-white-small-bag.png",
  },
  {
    name: "small bag — dark grey",
    price: "24",
    category: "all-time",
    in_stock: "yes",
    size: "26.5 × 18 cm (excl. handle)",
    description:
      "a smart dark-grey crochet bag with a sturdy handle — an easy everyday carry for bits and bobs on the go.",
    photo_url: "/test-products/dark-grey-small-bag.png",
  },
  {
    name: "leg warmers — black",
    price: "22",
    category: "limited",
    in_stock: "yes",
    size: "36 × 12 cm",
    description:
      "cosy ribbed crochet leg warmers in black — soft, stretchy and made to layer over tights or jeans through the colder months.",
    photo_url: "/test-products/black-leg-warmers.png",
  },
  {
    name: "leg warmers — brown",
    price: "22",
    category: "limited",
    in_stock: "yes",
    size: "36 × 12 cm",
    description:
      "warm brown ribbed leg warmers, hooked up to be snug and stretchy — a cosy autumn layer for chilly days.",
    photo_url: "/test-products/brown-leg-warmers.png",
  },
  {
    name: "leg warmers — honey",
    price: "22",
    category: "limited",
    in_stock: "yes",
    size: "36 × 12 cm",
    description:
      "a golden honey colourway of my ribbed crochet leg warmers — soft, stretchy and lovely to layer up in.",
    photo_url: "/test-products/honey-leg-warmers.png",
  },
  {
    name: "leg warmers — cream",
    price: "22",
    category: "limited",
    in_stock: "yes",
    size: "36 × 12 cm",
    description:
      "cream ribbed crochet leg warmers — a soft neutral pair that's cosy, stretchy and made to keep you snug.",
    photo_url: "/test-products/cream-white-leg-warmers.png",
  },
];
