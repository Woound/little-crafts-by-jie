import { font, shadow, color } from "@/lib/ui";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "say hi · little crafts by jie",
};

const ICONS = {
  instagram: (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  email: (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.6 7.2 8.4 5.6 8.4-5.6" />
    </svg>
  ),
  commission: (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  payment: (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19" />
      <path d="M6 14.5h4" />
    </svg>
  ),
};

const CARDS = [
  {
    href: LINKS.instagram,
    rot: "-0.8deg",
    icon: "instagram",
    title: "instagram",
    sub: "new makes, restocks and commission updates",
  },
  {
    href: `mailto:${LINKS.email}`,
    rot: "0.5deg",
    icon: "email",
    title: "email",
    sub: LINKS.email,
  },
  {
    href: LINKS.commissionForm,
    rot: "0.6deg",
    icon: "commission",
    title: "commission form",
    sub: "tell me what you’d love made",
  },
  {
    href: LINKS.paymentForm,
    rot: "-0.5deg",
    icon: "payment",
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
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                minWidth: 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  flex: "0 0 auto",
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--accent-soft)",
                  color: "var(--accent-deep)",
                }}
              >
                {ICONS[c.icon]}
              </span>
              <span style={{ minWidth: 0 }}>
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
