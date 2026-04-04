import clsx from "clsx";
import {
  DOMAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";

interface iButtonToTop extends DOMAttributes<HTMLButtonElement> {
  OnOpen: boolean;
  callback: (event: MouseEvent) => void;
}

export default function ButtonToTop({
  OnOpen,
  callback,
  ...props
}: iButtonToTop) {
  const [isOffSet, SetIsOffSet] = useState(false);

  const handlerToTop = (e: MouseEvent) => {
    if (callback) {
      callback(e);
    }
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onScroll = useCallback(() => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      SetIsOffSet(true);
      return;
    }
    SetIsOffSet(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <button
      onClick={(e) => handlerToTop(e)}
      {...props}
      className={clsx(
        "absolute flex items-center justify-center rounded-full bg-lime-500 p-1.5 text-sm font-medium text-white shadow-xl shadow-gray-700/50 transition-all delay-100 duration-300 ease-in-out dark:bg-lime-600",
        OnOpen && isOffSet
          ? "right-0 bottom-25 z-0 hover:scale-110 active:scale-110"
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
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
