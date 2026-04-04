import { useQuery } from "@tanstack/react-query";
import { LoadingSpiner } from "../../../components/Base/Loading";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import CardLink from "../../../components/card/CardLink";
import { NameIndexPage, TabTitle } from "../../../lib/Lib";
import { axiosInstance } from "../../../lib/axiosInstance";
import type {
  IResponsePagination,
  ISuccessResponse,
} from "../../../types/response";
import type { IVideo } from "../../../types/vagta";

export default function VideoSubMenu() {
  TabTitle("Video | Album | " + NameIndexPage);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["memory_video"],
    queryFn: async () => {
      const result = await axiosInstance.get<
        ISuccessResponse<IResponsePagination<IVideo>>
      >("/vagta/video", {
        params: {
          limit: 100,
        },
      });
      return result.data.data.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpiner />
      ) : isError ? (
        <ErrorPage message={error.message} ErrorCode={400} />
      ) : (
        <div className="3xl:grid-cols-6 grid gap-0 pb-3 md:container md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((vid) => (
            <CardLink
              key={vid._id}
              thumbnail={vid.thumbnail_url}
              title={vid.title}
              date={vid.createdAt}
              to={"/watch?v=" + vid._id}
            />
          ))}
        </div>
      )}
    </>
  );
}
