import clsx from "clsx";
import { DOMAttributes } from "react";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";

interface iButtonAbout extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
}

export default function ButtonAbout({ OnOpen, ...props }: iButtonAbout) {
  return (
    <ButtonLinkActive
      to="/team"
      {...props}
      className={clsx(
        "transition-transform-0 absolute flex items-center justify-center rounded-full bg-violet-500 p-1.5 text-sm font-medium text-white shadow-xl shadow-gray-700/50 transition-all delay-200 duration-300 ease-in-out outline-none dark:bg-violet-600 [.active]:bg-rose-600",
        OnOpen
          ? "visible right-12 bottom-12 z-0 scale-100 hover:scale-110 active:scale-110"
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
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </ButtonLinkActive>
  );
}
