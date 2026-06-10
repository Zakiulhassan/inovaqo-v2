import * as React from "react";

/** Form text input: dark field surface, mono uppercase label, lime focus border, coral error. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label above the field */
  label?: string;
  /** Helper text below */
  hint?: string;
  /** Error message — switches border + text to coral */
  error?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}
