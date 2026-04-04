import { useState } from "react";
import { LocaleFormatIndonesia, timeSince } from "../../lib/Lib";
import type { IVideo } from "../../types/vagta";
import ModalVideo from "./ModalVideo";

export default function ReadyVideo({ data }: { data: IVideo }) {
  const [GetSubString, SetSubString] = useState(false);
  const [IsShowModal, SetShowModal] = useState(false);

  function ShareButton() {
    if (navigator.share)
      return navigator.share({
        url: window.location.href,
        title: data.title,
        text: data.title,
      });
    return SetShowModal(true);
  }

  if (data) {
    return (
      <>
        <div className="mb-3 max-w-full md:mx-5 md:mr-8 md:mb-4 lg:max-w-[70%] lg:min-w-[50%]">
          <video
            className="w-full rounded-2xl bg-gray-400 bg-cover dark:bg-gray-700"
            poster={data.thumbnail_url}
            controls
            controlsList="nodownload"
          >
            <source src={data.video_url}></source>
          </video>
          <div className="dark:bg-opacity-20 bg-opacity-40 bg-white px-4 pt-2 pb-4 md:bg-transparent md:px-0 md:pt-2 md:pb-5 dark:bg-gray-700 md:dark:bg-transparent">
            <h5 className="mb-1 font-sans text-lg font-semibold tracking-normal text-gray-900 sm:text-xl md:text-2xl dark:text-white">
              {data.title}
            </h5>
            <div className="font-roboto mb-4 text-base font-normal text-gray-700 dark:text-gray-300">
              {timeSince(data.createdAt)}
              <div className="relative float-right mr-2 inline-flex flex-row">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <a
                    href={data.video_original_url}
                    target="_blank"
                    className="dark:bg-opacity-50 dark:hover:bg-opacity-50 rounded-l-lg border-2 border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-900 transition duration-200 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-blue-400 dark:focus:text-white dark:focus:ring-blue-500"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href={data.video_download_url}
                    target="_blank"
                    className="dark:bg-opacity-50 dark:hover:bg-opacity-50 border-t-2 border-b-2 border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-900 transition duration-200 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-blue-400 dark:focus:text-white dark:focus:ring-blue-500"
                    rel="noreferrer"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      ></path>
                    </svg>
                  </a>
                  <button
                    onClick={() => ShareButton()}
                    type="button"
                    className="dark:bg-opacity-50 dark:hover:bg-opacity-50 rounded-r-md border-2 border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-900 transition duration-200 ease-in-out hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:text-blue-400 dark:focus:text-white dark:focus:ring-blue-500"
                  >
                    <svg
                      className="h-5 w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-1 border-gray-400/90 dark:border-gray-600" />
            <p className="py-4 pt-2 font-sans tracking-wider whitespace-pre-line dark:text-gray-100">
              <span className="my-1 mb-2 block font-bold tracking-normal capitalize dark:text-gray-50">
                {LocaleFormatIndonesia(data.createdAt)?.Tanggal}
              </span>
              {data.description ? (
                <>
                  {!GetSubString
                    ? data.description?.length >= 30
                      ? data.description?.substring(0, 18) + "..."
                      : data.description
                    : data.description}
                  {data.description.length >= 30 && (
                    <button
                      onClick={() => SetSubString(!GetSubString)}
                      className={`${GetSubString ? "block" : "ml-1"} rounded-md px-1 font-medium text-gray-900 opacity-60 transition duration-200 ease-in-out select-none hover:bg-gray-300 active:bg-gray-400 dark:text-gray-200 dark:hover:bg-gray-600`}
                    >
                      {!GetSubString ? "selengkapnya" : "lebih sedikit"}
                    </button>
                  )}
                </>
              ) : (
                <>
                  <span className="flex h-24 items-center justify-center lg:h-56">
                    <span>Tidak ada deskripsi ¯\_(ツ)_/¯</span>
                  </span>
                </>
              )}
            </p>
          </div>
          <div className="h-1 w-full bg-gray-200 opacity-75 lg:hidden dark:bg-gray-500"></div>
        </div>
        {IsShowModal && (
          <ModalVideo
            callBack={() => SetShowModal(false)}
            isShowModal={IsShowModal}
            link={window.location.href}
          />
        )}
      </>
    );
  } else {
    return <div>await.....</div>;
  }
}
