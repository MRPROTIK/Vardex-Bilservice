import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = site.brandName;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
        }}
      >
        <svg width="820" height="258" viewBox="0 0 300 94" fill="none">
          <rect x="1" y="1" width="298" height="92" rx="11" stroke="#C9A24B" strokeWidth="1.25"/>
          <g transform="translate(40 12) scale(5)" stroke="#FFFFFF" strokeWidth=".72" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M0 0 2.5 7 5 0"/>
            <path d="M0 7 2.5 0 5 7M1 4.5h3" transform="translate(7 0)"/>
            <path d="M0 7V0h3c2 0 2 3.4 0 3.5H0m2.3 0L5 7" transform="translate(14 0)"/>
            <path d="M0 0v7h2.5c3.3 0 3.3-7 0-7H0z" transform="translate(21 0)"/>
            <path d="M5 0H0v7h5M0 3.5h4" transform="translate(28 0)"/>
            <path d="M0 0 5 7M5 0 0 7" transform="translate(35 0)"/>
          </g>
          <path d="M34 59h232" stroke="#C9A24B" strokeWidth="1"/>
          <g transform="translate(64 67) scale(2.85)" stroke="#FFFFFF" strokeWidth=".8" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M0 0v7h2.7c2.7 0 2.7-3.2 0-3.5h-2.7m2.7 0c2.7-.3 2.7-3.5 0-3.5H0"/>
            <path d="M2.5 0v7" transform="translate(6 0)"/>
            <path d="M0 0v7h5" transform="translate(12 0)"/>
            <path d="M5 0H1L0 1v1.5l1 1h3l1 1V6l-1 1H0" transform="translate(18 0)"/>
            <path d="M5 0H0v7h5M0 3.5h4" transform="translate(24 0)"/>
            <path d="M0 7V0h3c2 0 2 3.4 0 3.5H0m2.3 0L5 7" transform="translate(30 0)"/>
            <path d="M0 0 2.5 7 5 0" transform="translate(36 0)"/>
            <path d="M2.5 0v7" transform="translate(42 0)"/>
            <path d="M5 0H1L0 1v5l1 1h4" transform="translate(48 0)"/>
            <path d="M5 0H0v7h5M0 3.5h4" transform="translate(54 0)"/>
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
