import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import AlertInfo from "../../components/Alert/AlertInfo";
import { axiosInstance } from "../../lib/axiosInstance";
import type {
  IResponsePagination,
  ISuccessResponse,
} from "../../types/response";
import type { IImage } from "../../types/vagta";
import CardHomeMobile from "./CardHomeMobile";
import SkeletonPost from "./SkeletonPost";

export default function SectionPost() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["latest_post"],
    queryFn: async () => {
      const result = await axiosInstance.get<
        ISuccessResponse<IResponsePagination<IImage>>
      >("/vagta/image", {
        params: {
          limit: 6,
        },
      });
      return result.data.data.data;
    },
  });

  return (
    <>
      <AlertInfo
        BoldText="Info"
        text="klik kanan atau tahan pada gambar untuk melihat lebih jelas"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.3,
          duration: 0.7,
        }}
        viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
      />
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          delay: 0.5,
          duration: 0.7,
        }}
        viewport={{ once: true, margin: "0px 0px 0px 40px", amount: 0.8 }}
        className="text-dark my-4 mb-8 text-center text-3xl font-bold md:text-4xl dark:text-white"
      >
        Gallery
      </motion.h2>

      <div className="container mt-2 md:flex md:items-center md:justify-center">
        {!isLoading && !isError && data ? (
          <div className="grid min-h-[70vh] grid-cols-2 gap-4 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            {(data ?? ([] as IImage[])).map((i) => {
              return (
                <CardHomeMobile
                  to={"/album#" + i._id}
                  image={i.image_url}
                  title={i.title}
                  key={i._id}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid min-h-[70vh] grid-cols-2 gap-4 md:gap-6 lg:max-w-5xl lg:grid-cols-3">
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
          </div>
        )}
      </div>
    </>
  );
}
