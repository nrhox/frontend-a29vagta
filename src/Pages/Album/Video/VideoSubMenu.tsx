import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingSpiner } from "../../../components/Base/Loading";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import CardLink from "../../../components/card/CardLink";
import { NameIndexPage, TabTitle } from "../../../lib/Lib";
import type { IResponsePagination } from "../../../types/response";
import type { IVideo } from "../../../types/vagta";
import axiosInstance from "../../../lib/axiosInstance";

export default function VideoSubMenu() {
  TabTitle("Video | Album | " + NameIndexPage);

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
    queryKey: ["memory_video"],
    queryFn: async () => {
      const result = await axiosInstance.get<IResponsePagination<IVideo>>(
        "/vagta/video",
        {
          params: {
            limit: 10,
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
          <div className="3xl:grid-cols-6 grid gap-0 pb-3 md:container md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4">
            {data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.data.map((vid) => (
                  <CardLink
                    key={vid._id}
                    thumbnail={vid.thumbnail_url}
                    title={vid.title}
                    date={vid.createdAt}
                    to={"/watch?v=" + vid._id}
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
