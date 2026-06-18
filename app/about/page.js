import LinkButton from "@/components/LinkButton";
import { font, color, asset } from "@/lib/ui";

export const metadata = {
  title: "about — little crafts by jie",
};

const paragraphs = [
  "hi, i’m jie! crochet started as a tiny hobby to keep my hands busy, and somehow it grew into a whole little shop of handmade things ♥",
  "i make crochet bags, drawstring pouches, heart keychains and all sorts of cosy bits. every single one is made by hand, one stitch at a time, so no two are ever exactly the same. honestly, that’s my favourite part.",
  "i’m based in the uk and post all over the country. if there’s something you’d love that you don’t see in the shop, commissions are the way to go. i’d really love to make something just for you.",
];

export default function AboutPage() {
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
        about
      </h1>

      <figure
        style={{
          maxWidth: 560,
          margin: "30px auto 44px",
          transform: "rotate(-1.5deg)",
          background: "#fff",
          padding: "14px 14px 16px",
          borderRadius: 8,
          boxShadow: "5px 6px 0 rgba(74,59,46,0.16)",
        }}
      >
        <img
          src={asset("/about/ps-i-love-u.png")}
          alt="vintage flower postage stamps with a handwritten 'p.s. i love u' note"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            borderRadius: 4,
          }}
        />
      </figure>

      <div
        style={{
          fontSize: 18,
          lineHeight: 1.85,
          color: "#5c4a39",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        {paragraphs.map((p, i) => (
          <p key={i} style={{ margin: 0 }}>
            {p}
          </p>
        ))}
      </div>

      <div
        style={{ marginTop: 34, display: "flex", gap: 16, flexWrap: "wrap" }}
      >
        <LinkButton href="/shop" variant="primary">
          browse the shop
        </LinkButton>
        <LinkButton href="/commissions" variant="secondary">
          commission info
        </LinkButton>
      </div>
    </main>
  );
}
