import type { InputHTMLAttributes, ReactNode } from "react";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
): ReactNode {
  return (
    <input
      autoComplete={props.autoComplete ?? "off"}
      autoCorrect={props.autoCorrect ?? "off"}
      spellCheck={props.spellCheck ?? "false"}
      aria-autocomplete={props["aria-autocomplete"] ?? "none"}
      autoFocus={props.autoFocus ?? false}
      {...props}
    />
  );
}
