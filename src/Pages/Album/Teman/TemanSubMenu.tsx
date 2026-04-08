import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingSpiner } from "../../../components/Base/Loading";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import {
  BadgeBendahara,
  BadgeChairman,
  BadgeDevTeam,
  BadgeEagle,
  BadgeFlower,
  BadgeOsis,
  BadgeSekretaris,
  BadgeViceChairman,
} from "../../../lib/AssetIcon/IconCustom";
import { NameIndexPage, TabTitle } from "../../../lib/Lib";
import type { IResponsePagination } from "../../../types/response";
import type { IFriend } from "../../../types/vagta";
import axiosInstance from "../../../lib/axiosInstance";

interface CardTemanProps {
  data: IFriend;
}

function CardTeman({ data, ...props }: CardTemanProps) {
  const regex = new RegExp("\\b" + "ex " + "\\b", "gi");

  const checkAndAddElements = (
    sentence: string,
    keywords: string[],
    elements: ReactNode[],
  ) => {
    const parts: ReactNode[] = [];
    let currentPart = sentence.toLowerCase();
    currentPart = currentPart.replace(regex, "");
    const currentPartSplit = currentPart.split(", ");

    for (let i = 0; i < keywords.length; i++) {
      const keyword = keywords[i].toLowerCase();
      const element = elements[i];

      for (let j = 0; j < currentPartSplit.length; j++) {
        if (currentPartSplit[j] === keyword) {
          parts.push(element);
        }
      }
    }

    return (
      <>
        {parts.map((part, index) => (
          <Fragment key={index}>{part}</Fragment>
        ))}
      </>
    );
  };

  const keywords = [
    "siswa",
    "siswi",
    "bendahara",
    "osis",
    "ketua kelas",
    "wakil ketua kelas",
    "dev team",
    "sekretaris",
  ];
  const elements = [
    <BadgeEagle className="ml-1.5 size-8" />,
    <BadgeFlower className="ml-1.5 size-8" />,
    <BadgeBendahara className="ml-1.5 size-8" />,
    <BadgeOsis className="ml-1.5 size-8" />,
    <BadgeChairman className="ml-1.5 size-8" />,
    <BadgeViceChairman className="ml-1.5 size-8" />,
    <BadgeDevTeam className="ml-1.5 size-8" />,
    <BadgeSekretaris className="ml-1.5 size-8" />,
  ];
  const modifiedSentence = checkAndAddElements(data.role, keywords, elements);

  return (
    <div
      {...props}
      className="w-full max-w-full rounded-lg border border-gray-200 bg-white/40 p-4 px-5 capitalize shadow sm:p-6 dark:border-gray-700 dark:bg-gray-800/40"
    >
      <h5 className="mb-4 flex items-center align-middle text-lg font-bold text-gray-900 md:text-xl dark:text-gray-200">
        presensi {data.serial} {modifiedSentence}
      </h5>
      <ul className="my-2 space-y-2">
        <li className="flex space-x-3">
          <span className="text-base leading-tight font-normal text-gray-700 dark:text-gray-300">
            Nama : {data.full_name}
          </span>
        </li>
        <li className="flex space-x-3">
          <span className="text-base leading-tight font-normal text-gray-700 dark:text-gray-300">
            kelas : {data.class_room}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default function TemanSubMenu() {
  TabTitle("Presensi | Album | " + NameIndexPage);

  const { ref, inView } = useInView();

  const {
    isLoading,
    isError,
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["memory_friend"],
    queryFn: async ({ pageParam = null }: { pageParam: string | null }) => {
      const result = await axiosInstance.get<IResponsePagination<IFriend>>(
        "/vagta/friend",
        {
          params: {
            limit: 10,
            next: pageParam,
          },
        },
      );
      return result.data;
    },
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.meta.nextCursor ?? null,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (isLoading && !isError && isFetchingNextPage) {
    return <LoadingSpiner />;
  }

  if (isError) {
    return <ErrorPage message={error.message} ErrorCode={400} />;
  }

  return (
    <>
      {data !== undefined && (
        <>
          <div className="container">
            <div className="mb-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:mb-16 lg:grid-cols-4">
              {data.pages.map((group, i) => (
                <Fragment key={i}>
                  {group.data.map((friend, i) => (
                    <CardTeman data={friend} key={i} />
                  ))}
                </Fragment>
              ))}
            </div>
            {hasNextPage && (
              <div ref={ref} className="h-0 w-full bg-transparent"></div>
            )}
            {isFetchingNextPage && <LoadingSpiner />}
          </div>
        </>
      )}
    </>
  );
}
