import { MouseEvent, MouseEventHandler, useState } from "react";
import { metaViewPort } from "./../../lib/Lib";

const body = document.querySelector("body");

function StatisModal(isStatis: boolean) {
  if (isStatis) {
    metaViewPort("", true);
    if (body?.style.overflow !== undefined) {
      return (body.style.overflow = "hidden");
    }
  }
  metaViewPort("");
  return body?.removeAttribute("style");
}

interface ModalImageProps {
  Image: string;
  close: MouseEventHandler;
  isModalShow: boolean;
}

export default function ModalImageCard({
  Image,
  close,
  isModalShow,
}: ModalImageProps) {
  const [isShow, SetIsShow] = useState(false);

  if (isModalShow) {
    setTimeout(() => {
      SetIsShow(true);
    }, 200);
  }

  function CloseModalCallback(e: MouseEvent) {
    if ((e.target as HTMLElement).tagName === "IMG") {
      return null;
    }
    SetIsShow(false);
    return setTimeout(() => {
      StatisModal(false);
      return close(e);
    }, 200);
  }

  StatisModal(true);

  return (
    <div
      id="modal"
      tabIndex={-1}
      onClick={(e) => CloseModalCallback(e)}
      aria-hidden="true"
      className={`fixed inset-0 z-51 flex w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/80 p-4 transition duration-300 ease-in-out select-none md:h-full ${isShow ? "" : "opacity-0"}`}
    >
      <div
        className={`relative max-w-md transition duration-300 ease-in-out lg:max-w-lg ${!isShow && "translate-y-5"}`}
      >
        <button
          type="button"
          onClick={(e) => CloseModalCallback(e)}
          className="absolute top-2 right-2 z-50 ml-auto inline-flex items-center rounded-lg bg-transparent p-1 text-sm text-white transition-all duration-200 ease-in-out hover:bg-red-500 active:bg-red-400"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="block max-h-112 overflow-hidden rounded-md lg:max-h-140">
          <img className="h-full w-full lg:scale-110" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}
