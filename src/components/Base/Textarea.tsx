import type { InputHTMLAttributes, ReactNode } from "react";

export default function Textarea(
  props: InputHTMLAttributes<HTMLTextAreaElement>,
): ReactNode {
  return (
    <textarea
      autoComplete={props.autoComplete ?? "off"}
      autoCorrect={props.autoCorrect ?? "off"}
      spellCheck={props.spellCheck ?? "false"}
      aria-autocomplete={props["aria-autocomplete"] ?? "none"}
      autoFocus={props.autoFocus ?? false}
      {...props}
    >
      {props.children}
    </textarea>
  );
}
