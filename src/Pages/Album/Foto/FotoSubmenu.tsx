import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { LoadingSpiner } from "../../../components/Base/Loading";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import Card from "../../../components/card/Card";
import { NameIndexPage, TabTitle } from "../../../lib/Lib";
import type { IResponsePagination } from "../../../types/response";
import type { IImage } from "../../../types/vagta";
import axiosInstance from "../../../lib/axiosInstance";

const handleScrollToSelectID = (idElement: string) => {
  const element = document.getElementById(idElement);
  const elementNav = document.getElementById("header-nav");
  if (element) {
    window.scrollTo({
      top: element.offsetTop - (elementNav?.offsetHeight || 0),
      left: 0,
      behavior: "smooth",
    });
  }
};

export default function FotoSubmenu() {
  TabTitle("Foto | Album | " + NameIndexPage);
  const { hash } = useLocation();
  const IDElement = hash.split("#")[1];

  const { ref, inView } = useInView();

  const {
    data,
    isFetchingNextPage,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["memory_images"],
    queryFn: async ({ pageParam = null }: { pageParam: string | null }) => {
      const result = await axiosInstance.get<IResponsePagination<IImage>>(
        "/vagta/image",
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
    if (
      !isLoading &&
      !isError &&
      IDElement !== "" &&
      IDElement !== undefined &&
      IDElement !== null
    ) {
      handleScrollToSelectID(IDElement);
    }
  }, [IDElement, isError, isLoading]);

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
          <div className="3xl:grid-cols-6 grid gap-0 pb-6 md:container md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.data.map((d) => (
                  <Card
                    key={d._id}
                    id={d._id}
                    thumbnail={d.image_url}
                    title={d.title}
                    describe={d.description}
                    date={d.createdAt}
                    linkDownload={d.image_download_url}
                    linkRepo={d.image_original_url}
                  />
                ))}
              </Fragment>
            ))}
          </div>
          {hasNextPage && (
            <div ref={ref} className="h-0 w-full bg-transparent"></div>
          )}
          {isFetchingNextPage && <LoadingSpiner />}
        </>
      )}
    </>
  );
}
