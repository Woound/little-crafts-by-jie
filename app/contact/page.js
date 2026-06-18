import { font, shadow, color } from "@/lib/ui";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "say hi · little crafts by jie",
};

const CARDS = [
  {
    href: LINKS.instagram,
    rot: "-0.8deg",
    title: "instagram",
    sub: "new makes, restocks and commission updates",
  },
  {
    href: `mailto:${LINKS.email}`,
    rot: "0.5deg",
    title: "email",
    sub: LINKS.email,
  },
  {
    href: LINKS.commissionForm,
    rot: "0.6deg",
    title: "commission form",
    sub: "tell me what you’d love made",
  },
  {
    href: LINKS.paymentForm,
    rot: "-0.5deg",
    title: "payment form",
    sub: "paypal, ko-fi or bank. +£3 uk delivery",
  },
];

export default function ContactPage() {
  return (
    <main
      className="lc-pad"
      style={{ maxWidth: 760, margin: "0 auto", padding: "56px 28px 84px" }}
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
        say hi ♥
      </h1>
      <p
        style={{
          fontFamily: font.hand,
          fontSize: 22,
          color: "var(--accent-deep)",
          margin: "8px 0 36px",
          maxWidth: "40em",
        }}
      >
        the best place to reach me is instagram, that’s where all my new makes
        and restocks go up. for orders, just use the forms below!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {CARDS.map((c) => (
          <a
            key={c.title}
            className="taped"
            href={c.href}
            target="_blank"
            rel="noopener"
            style={{
              "--rot": c.rot,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              background: "#fff",
              borderRadius: 5,
              padding: "20px 24px",
              textDecoration: "none",
              boxShadow: shadow.noteSoft,
            }}
          >
            <span>
              <span
                style={{
                  fontFamily: font.display,
                  fontWeight: 700,
                  fontSize: 18,
                  color: color.heading,
                  display: "block",
                }}
              >
                {c.title}
              </span>
              <span
                style={{
                  fontFamily: font.hand,
                  fontSize: 18,
                  color: color.body,
                }}
              >
                {c.sub}
              </span>
            </span>
            <span
              style={{
                color: "var(--accent-deep)",
                fontFamily: font.display,
                fontWeight: 700,
              }}
            >
              →
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
