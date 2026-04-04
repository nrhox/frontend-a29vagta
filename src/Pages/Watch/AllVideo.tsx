import { useQuery } from "@tanstack/react-query";
import { LoadingSpiner } from "../../components/Base/Loading";
import { axiosInstance } from "../../lib/axiosInstance";
import type {
  IResponsePagination,
  ISuccessResponse,
} from "../../types/response";
import type { IVideo } from "../../types/vagta";
import SideVideo from "./SideVideo";

export default function AllVideo({ id }: { id: string }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["side_video_" + id],
    queryFn: async () => {
      const result = await axiosInstance.get<
        ISuccessResponse<IResponsePagination<IVideo>>
      >("/vagta/video", {
        params: {
          limit: 100,
          not: id,
        },
      });
      return result.data.data.data;
    },
  });

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <LoadingSpiner />;
  }

  return data?.map((vid, i: number) => <SideVideo video={vid} key={i} />);
}
