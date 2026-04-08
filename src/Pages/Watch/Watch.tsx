import { useQuery } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { redirect, useSearchParams } from "react-router-dom";
import { LoadingSpiner } from "../../components/Base/Loading";
import axiosInstance from "../../lib/axiosInstance";
import { NameIndexPage, TabTitle, metaDescription } from "../../lib/Lib";
import type { ISuccessResponse } from "../../types/response";
import type { IVideo } from "../../types/vagta";
import AllVideo from "./AllVideo";
import ErrorVideoNotFound from "./ErrorVideoNotFound";
import LoadingVideo from "./LoadingVideo";
import ReadyVideo from "./ReadyVideo";

function Watch() {
  const [query] = useSearchParams();
  const id = query.get("v");
  TabTitle(NameIndexPage);

  useEffect(() => {
    if (id === null) {
      redirect("/album/video");
    }
  }, [id, query]);

  const { isLoading, isError, data } = useQuery({
    queryKey: ["video_" + id],
    queryFn: async () => {
      const result = await axiosInstance.get<ISuccessResponse<IVideo>>(
        "/vagta/video/" + id,
      );
      return result.data.data;
    },
  });

  TabTitle(`${!data?.title ? "" : data?.title + " - "}` + NameIndexPage);
  metaDescription(`${data?.description ?? ""}`);

  return (
    <>
      <div className="font-sans md:container">
        <div className="flex flex-col justify-between pt-2 md:py-4 lg:flex-row">
          {isError ? (
            <ErrorVideoNotFound />
          ) : !isLoading && data ? (
            <ReadyVideo data={data} />
          ) : (
            <LoadingVideo />
          )}
          <div className="mt-2 mb-6 flex w-full flex-col border-b border-b-slate-300 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-2 lg:mt-0 lg:mb-0 lg:flex lg:w-[70%] lg:flex-col lg:gap-5">
            {!isLoading ? <AllVideo id={id || ""} /> : <LoadingSpiner />}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Watch);
