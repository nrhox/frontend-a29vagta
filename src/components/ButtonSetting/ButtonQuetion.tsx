import clsx from "clsx";
import { DOMAttributes } from "react";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";

interface iButtonQuestion extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
}

export default function ButtonQuetion({ OnOpen, ...props }: iButtonQuestion) {
  return (
    <ButtonLinkActive
      to="/question"
      {...props}
      className={clsx(
        "absolute items-center justify-center rounded-full bg-blue-500 p-1.5 text-sm font-medium text-white shadow-xl shadow-gray-700/50 transition-all delay-250 duration-300 ease-in-out outline-none dark:bg-blue-600 [.active]:bg-rose-600",
        OnOpen
          ? "visible right-12 bottom-0 scale-100 hover:scale-110 active:scale-110"
          : "invisible right-0 bottom-0 -z-40 scale-0",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    </ButtonLinkActive>
  );
}
