import Link from "next/link";
import { site } from "@/content/site";

type LogoProps = {
  variant?: "full" | "compact";
  theme?: "dark" | "light";
  className?: string;
};

const colors = {
  dark: { background: "#0A0A0A", foreground: "#FFFFFF", gold: "#C9A24B" },
  light: { background: "#FFFFFF", foreground: "#0A0A0A", gold: "#C9A24B" },
} as const;

function LogoArtwork({
  variant,
  theme,
}: {
  variant: "full" | "compact";
  theme: "dark" | "light";
}) {
  const color = colors[theme];

  if (variant === "compact") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="8"
          stroke={color.gold}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M17 16 32 49 47 16"
          stroke={color.foreground}
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="94"
      viewBox="0 0 300 94"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="1"
        y="1"
        width="298"
        height="92"
        rx="11"
        stroke={color.gold}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <g
        transform="translate(40 12) scale(5)"
        stroke={color.foreground}
        strokeWidth=".72"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M0 0 2.5 7 5 0" />
        <path d="M0 7 2.5 0 5 7M1 4.5h3" transform="translate(7 0)" />
        <path d="M0 7V0h3c2 0 2 3.4 0 3.5H0m2.3 0L5 7" transform="translate(14 0)" />
        <path d="M0 0v7h2.5c3.3 0 3.3-7 0-7H0z" transform="translate(21 0)" />
        <path d="M5 0H0v7h5M0 3.5h4" transform="translate(28 0)" />
        <path d="M0 0 5 7M5 0 0 7" transform="translate(35 0)" />
      </g>
      <path
        d="M34 59h232"
        stroke={color.gold}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <g
        transform="translate(64 67) scale(2.85)"
        stroke={color.foreground}
        strokeWidth=".8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        <path d="M0 0v7h2.7c2.7 0 2.7-3.2 0-3.5h-2.7m2.7 0c2.7-.3 2.7-3.5 0-3.5H0" />
        <path d="M2.5 0v7" transform="translate(6 0)" />
        <path d="M0 0v7h5" transform="translate(12 0)" />
        <path d="M5 0H1L0 1v1.5l1 1h3l1 1V6l-1 1H0" transform="translate(18 0)" />
        <path d="M5 0H0v7h5M0 3.5h4" transform="translate(24 0)" />
        <path d="M0 7V0h3c2 0 2 3.4 0 3.5H0m2.3 0L5 7" transform="translate(30 0)" />
        <path d="M0 0 2.5 7 5 0" transform="translate(36 0)" />
        <path d="M2.5 0v7" transform="translate(42 0)" />
        <path d="M5 0H1L0 1v5l1 1h4" transform="translate(48 0)" />
        <path d="M5 0H0v7h5M0 3.5h4" transform="translate(54 0)" />
      </g>
    </svg>
  );
}

export default function Logo({
  variant = "full",
  theme = "dark",
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={site.brandName}
      className={`inline-flex shrink-0 ${className ?? ""}`}
    >
      <LogoArtwork variant={variant} theme={theme} />
    </Link>
  );
}
