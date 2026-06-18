import CommissionStatusNote from "@/components/CommissionStatusNote";
import LinkButton from "@/components/LinkButton";
import { font, shadow, color } from "@/lib/ui";
import { LINKS } from "@/lib/links";

export const metadata = {
  title: "commissions — little crafts by jie",
};

const STEPS = [
  {
    n: "1",
    title: "check the carrd",
    body: "have a little look at what i can make and the rough pricing first.",
  },
  {
    n: "2",
    title: "fill the form",
    body: "tell me what you’d love: colours, sizes, all the little details.",
  },
  {
    n: "3",
    title: "pay & i make it",
    body: "pop your total in the payment form, then i get stitching!",
  },
];

export default function CommissionsPage() {
  return (
    <main
      className="lc-pad"
      style={{ maxWidth: 920, margin: "0 auto", padding: "56px 28px 84px" }}
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
        commissions
      </h1>

      <CommissionStatusNote />

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.7,
          color: "#5c4a39",
          margin: "0 0 40px",
          maxWidth: "42em",
        }}
      >
        i open and close commissions depending on how busy my schedule is.
        updates always go up on my instagram stories, so look out for those! ♥
      </p>

      <h2
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: 26,
          color: color.heading,
          margin: "0 0 24px",
        }}
      >
        how it works
      </h2>
      <div
        className="lc-steps"
        style={{
          marginBottom: 48,
        }}
      >
        {STEPS.map((s) => (
          <div
            key={s.n}
            style={{
              background: "#fff",
              borderRadius: 4,
              padding: 24,
              boxShadow: shadow.noteSoft,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "var(--accent)",
                color: "#fff",
                fontFamily: font.display,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 19,
                marginBottom: 16,
                outline: "1.5px dashed rgba(255,255,255,0.8)",
                outlineOffset: -5,
                transform: "rotate(-5deg)",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontFamily: font.display,
                fontWeight: 700,
                fontSize: 18,
                color: color.heading,
                marginBottom: 6,
              }}
            >
              {s.title}
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.6, color: color.body }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 50 }}
      >
        <LinkButton href={LINKS.carrd} external variant="primary">
          commission info (carrd) →
        </LinkButton>
        <LinkButton href={LINKS.commissionForm} external variant="secondary">
          open commission form →
        </LinkButton>
      </div>

      <h2
        style={{
          fontFamily: font.display,
          fontWeight: 700,
          fontSize: 26,
          color: color.heading,
          margin: "0 0 8px",
        }}
      >
        payments
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          color: "#5c4a39",
          margin: "0 0 22px",
          maxWidth: "42em",
        }}
      >
        this one needs a tiny bit of maths on your end! pop your total into the
        payment form and pick how you’d like to pay. your options are{" "}
        <strong>paypal</strong>, <strong>ko-fi</strong> and{" "}
        <strong>bank transfer</strong>.
      </p>
      <div
        style={{
          background: "#fff",
          borderRadius: 4,
          padding: "22px 26px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "space-between",
          boxShadow: shadow.noteSoft,
        }}
      >
        <div style={{ fontFamily: font.hand, fontSize: 21, color: color.body }}>
          don’t forget{" "}
          <strong style={{ color: "var(--accent-deep)" }}>+£3 delivery</strong>{" "}
          (uk delivery only!)
        </div>
        <a
          className="nudge"
          href={LINKS.paymentForm}
          target="_blank"
          rel="noopener"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 5,
            fontFamily: font.display,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            whiteSpace: "nowrap",
            boxShadow: shadow.badge,
          }}
        >
          payment form →
        </a>
      </div>
    </main>
  );
}
