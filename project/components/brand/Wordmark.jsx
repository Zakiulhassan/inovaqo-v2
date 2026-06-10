import React from "react";
import { QCore } from "./QCore.jsx";

/** INOVAQO wordmark — uppercase Geist 600 with the Q-Core as signature letter. */
export function Wordmark({ size = 28, color = "var(--text-primary)", qColor = "var(--color-signal-lime)", style }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: size,
        letterSpacing: "0.02em",
        lineHeight: 1,
        color,
        ...style,
      }}
    >
      INOVA
      <QCore size={size * 0.92} color={qColor} style={{ margin: "0 0.5px", transform: "translateY(0.115em)" }} />O
    </span>
  );
}
