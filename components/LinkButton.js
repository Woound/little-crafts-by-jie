import Link from "next/link";
import { primaryBtn, secondaryBtn } from "@/lib/ui";

// A pressable pill button rendered as the right element:
//  - internal route  -> next/link
//  - external (http)  -> <a target="_blank" rel="noopener">
// `variant` picks the primary (accent fill) or secondary (dashed) treatment.
export default function LinkButton({
  href,
  external = false,
  variant = "primary",
  children,
  style = {},
  fontSize = 16,
  padding = "14px 26px",
}) {
  const base = variant === "primary" ? primaryBtn : secondaryBtn;
  const merged = {
    ...base,
    fontSize,
    padding,
    display: "inline-block",
    ...style,
  };

  if (external) {
    return (
      <a
        className="nudge"
        href={href}
        target="_blank"
        rel="noopener"
        style={merged}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className="nudge" href={href} style={merged}>
      {children}
    </Link>
  );
}
