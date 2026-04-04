import { HTMLMotionProps, motion } from "motion/react";
import { MouseEvent, useState } from "react";

interface iAlertProps extends HTMLMotionProps<"div"> {
  text: string;
  BoldText: string;
  callBack?: (e: MouseEvent) => void;
}

export default function AlertInfo({
  text,
  BoldText,
  callBack,
  ...props
}: iAlertProps) {
  const [isHidden, SetHidden] = useState(false);
  const [isClickHidden, SetClickHidden] = useState(false);

  function CloseHandler(e: MouseEvent) {
    SetClickHidden(true);

    setTimeout(() => {
      if (callBack) {
        return callBack(e);
      }

      return SetHidden(true);
    }, 500);
  }

  return (
    <>
      {!isHidden ? (
        <motion.div className="container lg:max-w-screen-sm" {...props}>
          <div
            className={`mb-4 flex rounded-lg bg-blue-50 p-4 text-sm text-blue-800 transition duration-500 ease-in-out dark:bg-gray-800 dark:text-blue-400 ${isClickHidden ? "translate-y-4 opacity-0" : ""}`}
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-2 inline h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <div className="text-base">
              <span className="font-medium">{BoldText}</span> {text}
            </div>
            <button
              onClick={(e) => CloseHandler(e)}
              className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-blue-50 p-1.5 text-blue-500 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}
