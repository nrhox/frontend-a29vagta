import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LazyImage from "../../components/Base/LazyImage";
import { LoadingSpiner } from "../../components/Base/Loading";
import ModalCard from "../../components/card/ModalCard";
import {
  LocaleFormatIndonesia,
  NameIndexPage,
  SatuanWaktu,
  TabTitle,
  timeSince,
} from "../../lib/Lib";
import { axiosInstance } from "../../lib/axiosInstance";
import type { ISuccessResponse } from "../../types/response";
import type { IImage } from "../../types/vagta";

export default function Postings() {
  const [GetSubString, SetSubString] = useState(false);
  const [IsShowModal, SetShowModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const LinkShare = window.location.origin + "/p/" + id;

  const { isLoading, isError, data } = useQuery({
    queryKey: ["memory_images_" + id],
    queryFn: async () => {
      const result = await axiosInstance.get<ISuccessResponse<IImage>>(
        `/vagta/image/${id}`,
        {
          params: {
            limit: 100,
          },
        },
      );
      return result.data.data;
    },
  });

  const lengthDes = data?.description?.length ?? 0;

  function ShareImage() {
    if (navigator.share)
      return navigator.share({
        title: data?.title,
        text: data?.description,
        url: `${window.location.origin + "/p/" + id}`,
      });
    return SetShowModal(true);
  }

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  TabTitle(`${data?.title ? data.title + " - " : ""}` + NameIndexPage);

  if (isLoading) {
    return <LoadingSpiner />;
  }

  return (
    <>
      <div className="flex justify-center md:mx-10">
        <div className="min-w-full md:mt-10 md:min-w-[40%] lg:max-w-[40%]">
          <div className="flex min-h-[80vh] flex-col border border-gray-200 bg-white/40 font-sans md:min-h-screen md:rounded-lg md:rounded-t-lg md:border-transparent md:bg-transparent dark:border-gray-700 dark:bg-gray-800/40 md:dark:border-transparent md:dark:bg-transparent">
            <LazyImage className="md:rounded-lg">
              <img
                className="md:rounded-lg"
                src={data?.image_url ?? ""}
                alt={(data?.title ?? "") + " " + (data?.description ?? "")}
              />
            </LazyImage>
            <div className="flex-auto p-5 pt-3 md:px-5 md:pt-3 md:pb-5">
              <div className="flex flex-row">
                <a
                  href={data?.image_original_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2 cursor-default text-black transition duration-200 ease-in-out active:text-blue-700 md:hover:text-blue-700 lg:cursor-pointer dark:text-gray-50"
                >
                  <svg
                    className="h-6 w-6"
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
                  href={data?.image_download_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 cursor-default text-black transition duration-200 ease-in-out active:text-blue-700 md:hover:text-blue-700 lg:cursor-pointer dark:text-gray-50"
                >
                  <svg
                    className="h-6 w-6"
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
                  onClick={() => ShareImage()}
                  className="mx-1 cursor-default text-black transition duration-200 ease-in-out active:text-blue-700 md:hover:text-blue-700 lg:cursor-pointer dark:text-gray-50"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </button>
              </div>
              <h5 className="mt-1 mb-1 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                adsdasds
              </h5>
              <p className="text-base font-normal whitespace-pre-line text-gray-700 dark:text-gray-300">
                <span className="inline-block text-base font-semibold text-gray-700 dark:text-gray-200">
                  {timeSince(data?.createdAt ?? "")}
                </span>{" "}
                {GetSubString
                  ? data?.description
                  : lengthDes
                    ? data?.description.substring(0, 9) + "...."
                    : data?.description}
                {lengthDes ? (
                  <button
                    onClick={() => SetSubString(!GetSubString)}
                    className={`${GetSubString ? "block" : "ml-1"} font-medium text-gray-900 opacity-60 select-none dark:text-gray-400`}
                  >
                    {!GetSubString ? "selengkapnya" : "lebih sedikit"}
                  </button>
                ) : null}
                <span className="block font-sans text-sm text-black select-none dark:text-gray-200">
                  {
                    LocaleFormatIndonesia(
                      data?.createdAt ?? "",
                      true,
                      SatuanWaktu.bulan,
                      1,
                    )?.TanggalNotHari
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {IsShowModal && (
        <ModalCard callBack={() => SetShowModal(false)} link={LinkShare} />
      )}
    </>
  );
}
