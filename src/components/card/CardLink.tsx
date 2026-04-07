import { MouseEvent, MouseEventHandler, memo } from "react";
import { useNavigate } from "react-router-dom";
import { LocaleFormatIndonesia, timeSince } from "../../lib/Lib";
import LazyImage from "../Base/LazyImage";

interface iCardLinkProps {
  to: string;
  thumbnail: string;
  title: string;
  date: string | number | Date;
  onClick?: MouseEventHandler;
}

function CardLink({
  to,
  thumbnail,
  title,
  date,
  onClick,
  ...props
}: iCardLinkProps) {
  const navigate = useNavigate();
  const lengthJudul = title.length >= 60;

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  return (
    <div {...props}>
      <div
        onClick={(e) => handlerClick(e)}
        className="relative mb-3 flex flex-col border border-gray-200 bg-white/40 font-sans transition-all duration-150 select-none active:opacity-80 md:my-4 md:max-w-sm md:border-transparent md:bg-transparent dark:border-gray-700 dark:bg-gray-800/40 md:dark:border-transparent md:dark:bg-transparent"
      >
        <LazyImage className="md:rounded-lg">
          <img
            className="md:rounded-lg"
            src={thumbnail}
            alt={title}
            onContextMenu={(e) => e.preventDefault()}
          />
        </LazyImage>
        <div className="p-4 py-5 pt-3 sm:p-5 md:px-5 md:py-5 md:pt-3">
          <h5 className="mb-1 text-lg font-medium tracking-normal text-gray-900 sm:text-xl dark:text-white">
            {lengthJudul ? title.substring(0, 43) + "..." : title}
          </h5>
          <span className="block text-sm font-normal text-gray-700 dark:text-gray-300">
            {timeSince(date) +
              " • " +
              LocaleFormatIndonesia(date)?.TanggalNotHari}
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(CardLink);
