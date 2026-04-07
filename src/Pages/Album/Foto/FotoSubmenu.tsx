import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoadingSpiner } from "../../../components/Base/Loading";
import ErrorPage from "../../../components/ErrorPage/ErrorPage";
import Card from "../../../components/card/Card";
import { NameIndexPage, TabTitle } from "../../../lib/Lib";
import { axiosInstance } from "../../../lib/axiosInstance";
import type { IResponsePagination } from "../../../types/response";
import type { IImage } from "../../../types/vagta";

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

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["memory_images"],
    queryFn: async () => {
      const result = await axiosInstance.get<IResponsePagination<IImage>>(
        "/vagta/image",
        {
          params: {
            limit: 100,
          },
        },
      );
      return result.data.data;
    },
  });

  useEffect(() => {
    if (!isLoading && !isError && (data?.length ?? 0) > 0) {
      handleScrollToSelectID(IDElement);
    }
  }, [isLoading, IDElement, isError, data]);

  return (
    <>
      {isLoading ? (
        <LoadingSpiner />
      ) : isError ? (
        <ErrorPage message={error.message} ErrorCode={400} />
      ) : (
        <div className="3xl:grid-cols-6 grid gap-0 pb-6 md:container md:grid-cols-2 md:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((d) => (
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
        </div>
      )}
    </>
  );
}
