import Link from "next/link";
import Polaroid from "@/components/Polaroid";
import CommissionBanner from "@/components/CommissionBanner";
import FreshFromHook from "@/components/FreshFromHook";
import LinkButton from "@/components/LinkButton";
import { font, shadow, color } from "@/lib/ui";

export default function HomePage() {
  return (
    <main>
      {/* hero */}
      <section
        className="lc-hero lc-pad"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "60px 28px 40px",
        }}
      >
        <div style={{ position: "relative" }}>
          <span
            style={{
              fontFamily: font.hand,
              fontSize: 24,
              color: "var(--accent-deep)",
              transform: "rotate(-2deg)",
              display: "inline-block",
            }}
          >
            ✿ welcome to my little corner
          </span>
          <h1
            style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "clamp(34px, 4.4vw, 47px)",
              lineHeight: 1.14,
              margin: "12px 0 0",
              color: color.heading,
              letterSpacing: "-0.01em",
              textWrap: "balance",
            }}
          >
            made by hand,{" "}
            <span
              style={{
                background: "var(--hi)",
                padding: "1px 10px",
                borderRadius: 6,
                display: "inline-block",
                transform: "rotate(-1.5deg)",
                boxShadow: "2px 2px 0 rgba(74,59,46,0.12)",
                whiteSpace: "nowrap",
              }}
            >
              one stitch
            </span>{" "}
            at a time
          </h1>
          <p
            style={{
              fontSize: 17.5,
              lineHeight: 1.65,
              color: color.body,
              margin: "24px 0 0",
              maxWidth: "30em",
            }}
          >
            crochet bags, heart keychains, and all sorts of cosy little bits.
            each one is made by me with a lot of love (and a whole lot of yarn).
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <LinkButton
              href="/shop"
              variant="primary"
              fontSize={17}
              padding="14px 28px"
            >
              browse the shop
            </LinkButton>
            <LinkButton
              href="/commissions"
              variant="secondary"
              fontSize={17}
              padding="14px 28px"
            >
              commission something
            </LinkButton>
          </div>
        </div>

        {/* taped polaroid cluster */}
        <div className="lc-cluster">
          <Polaroid
            style={{ position: "absolute", top: 6, left: "4%" }}
            width="50%"
            rotate={-5}
            fillHeight={200}
            fill="repeating-linear-gradient(135deg,#EFE7D3 0 14px,#E7DBC2 14px 28px)"
            photo="/test-products/black-small-bag.png"
            washi={{
              width: 78,
              height: 24,
              rotate: -7,
              tint: "rgba(199,138,114,",
            }}
            caption="handmade bag"
            captionColor={color.body}
          />
          <Polaroid
            style={{ position: "absolute", top: "30%", right: "2%" }}
            width="44%"
            rotate={7}
            fillHeight={170}
            fill="repeating-linear-gradient(135deg,#F0E2DC 0 14px,#E7D0C6 14px 28px)"
            photo="/test-products/crochet-heart-keychain-red.png"
            washi={{
              width: 70,
              height: 22,
              rotate: 6,
              tint: "rgba(156,166,132,",
              alphaA: 0.55,
              alphaB: 0.3,
            }}
            caption="heart keychain"
            captionColor="#9c7766"
          />
          <Polaroid
            style={{ position: "absolute", bottom: 0, left: "26%" }}
            width="42%"
            rotate={-1.5}
            padding="12px 12px 42px"
            fillHeight={150}
            fill="repeating-linear-gradient(135deg,#E9E6D6 0 14px,#DCDABF 14px 28px)"
            photo="/test-products/mini-drawstring-pouch-brown.png"
            washi={{
              width: 64,
              height: 20,
              rotate: 3,
              top: -9,
              tint: "rgba(199,138,114,",
              alphaA: 0.5,
              alphaB: 0.28,
              band: 6,
            }}
            caption="drawstring pouch"
            captionColor="#80836a"
            captionSize={19}
            captionBottom={13}
          />
        </div>
      </section>

      <CommissionBanner />

      <FreshFromHook />

      {/* stitch divider */}
      <div style={{ maxWidth: 1140, margin: "48px auto 0", padding: "0 28px" }}>
        <div style={{ borderTop: `2.5px dashed ${color.dash}` }} />
      </div>

      {/* about teaser */}
      <section
        className="lc-split lc-pad"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "56px 28px 76px",
        }}
      >
        <Polaroid
          width="100%"
          rotate={-3}
          padding="14px 14px 50px"
          boxShadow={shadow.cardSoft}
          fillHeight={230}
          fill="repeating-linear-gradient(135deg,#F0E2DC 0 16px,#E7D0C6 16px 32px)"
          photo="/test-products/multiple-crochet-heart-keychains.png"
          washi={{
            width: 90,
            height: 24,
            rotate: -5,
            top: -11,
            tint: "rgba(156,166,132,",
            alphaA: 0.5,
            alphaB: 0.28,
          }}
          caption="a few of my makes ♥"
          captionColor="#9c7766"
          captionSize={21}
          captionBottom={16}
          style={{ maxWidth: 340 }}
        />
        <div>
          <h2
            style={{
              fontFamily: font.display,
              fontWeight: 700,
              fontSize: "clamp(25px, 5.5vw, 30px)",
              margin: 0,
              color: color.heading,
            }}
          >
            hi, i’m jie!
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: color.body,
              margin: "16px 0 0",
            }}
          >
            crochet started as a little hobby to keep my hands busy, and somehow
            turned into a whole shop of tiny handmade things. every piece is
            made one at a time, by me, with way too much yarn and a lot of love.
          </p>
          <div style={{ marginTop: 24 }}>
            <LinkButton href="/about" variant="secondary" padding="13px 26px">
              more about me →
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
