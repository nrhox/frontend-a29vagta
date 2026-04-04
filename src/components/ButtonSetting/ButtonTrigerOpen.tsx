import { DOMAttributes } from "react";

interface iButtonTriggerOpen extends DOMAttributes<HTMLButtonElement> {
  isOpen: boolean;
  callback: (event: boolean) => void;
}

export default function ButtonTrigerOpen({
  isOpen,
  callback,
  ...props
}: iButtonTriggerOpen) {
  return (
    <button
      onClick={() => callback(!isOpen)}
      {...props}
      className="absolute right-0 bottom-0 flex aspect-square justify-center rounded-full bg-cyan-500 p-1.5 text-sm font-medium text-white shadow-xl shadow-gray-700/50 transition-all duration-200 ease-in-out outline-none hover:scale-110 active:scale-110 dark:bg-cyan-600"
    >
      <div className="flex flex-col items-center justify-between">
        <svg
          viewBox="0 0 450 257"
          xmlns="http://www.w3.org/2000/svg"
          className={`mb-1 h-2 w-6 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-[0.3rem] rotate-180" : "translate-y-0"} `}
        >
          <path
            fill="currentColor"
            d="M202.4 9.4C214.9 -3.1 235.2 -3.1 247.7 9.4L439.7 201.4C452.2 213.9 452.2 234.2 439.7 246.7C427.2 259.2 406.9 259.2 394.4 246.7L225 77.3L55.6 246.6C43.1 259.1 22.8 259.1 10.3 246.6C-2.20001 234.1 -2.20001 213.8 10.3 201.3L202.3 9.3L202.4 9.4Z"
          />
        </svg>

        <svg
          viewBox="0 0 450 257"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-2 w-6 transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-[0.3rem] rotate-180" : "translate-y-0"} `}
        >
          <path
            fill="currentColor"
            d="M202.4 247.6C214.9 260.1 235.2 260.1 247.7 247.6L439.7 55.6C452.2 43.1 452.2 22.8 439.7 10.3C427.2 -2.2 406.9 -2.2 394.4 10.3L225 179.7L55.6 10.4C43.1 -2.10001 22.8 -2.10001 10.3 10.4C-2.20001 22.9 -2.20001 43.2 10.3 55.7L202.3 247.7L202.4 247.6Z"
          />
        </svg>
      </div>
      <span className="sr-only">Menu</span>
    </button>
  );
}
