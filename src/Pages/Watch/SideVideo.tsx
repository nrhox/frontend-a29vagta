import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LocaleFormatIndonesia, timeSince } from "../../lib/Lib";
import type { IVideo } from "../../types/vagta";

export default function SideVideo({ video }: { video: IVideo }) {
  const navigate = useNavigate();

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate("/watch?v=" + video._id);
  };

  return (
    <div
      onClick={(e) => handlerClick(e)}
      className="mb-3 border-b border-b-gray-300 transition-all duration-200 ease-in-out hover:opacity-90 md:items-start lg:mb-0 lg:flex lg:space-x-5 lg:border-none dark:border-b-gray-600"
    >
      <div
        style={{ aspectRatio: 8.7 / 4.9 }}
        className="flex w-full bg-[#E0E0E0] md:rounded-lg lg:max-w-[40%] dark:bg-[#323d4e]"
      >
        <img
          src={video.thumbnail_url}
          alt={"thumbnail " + video.title}
          className="bg-cover md:rounded-lg"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <div className="my-3 flex w-full flex-col px-5 lg:my-0 lg:px-1">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {video.title}
        </h5>
        <span className="block text-sm font-normal text-gray-700 capitalize dark:text-gray-400">
          {timeSince(video.createdAt) +
            " • " +
            LocaleFormatIndonesia(video.createdAt)?.TanggalNotHari}
        </span>
      </div>
    </div>
  );
}
