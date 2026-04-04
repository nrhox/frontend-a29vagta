import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { clsx } from "clsx";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate untuk navigasi modern
import * as yup from "yup";
import Input from "../../../components/Base/Input";
import Textarea from "../../../components/Base/Textarea";
import { axiosInstance } from "../../../lib/axiosInstance";
import {
  DRIVE_URL_STRING_REGEX,
  NameIndexPage,
  TabTitle,
} from "../../../lib/Lib";
import type { IErrorResponse, ISuccessResponse } from "../../../types/response";
import type { IVideo } from "../../../types/vagta";

const uploadVideoSchema = yup.object({
  vid_link: yup
    .string()
    .required("Wajib diisi")
    .matches(DRIVE_URL_STRING_REGEX, "Bukan link Google Drive"),
  thumb_link: yup.string().when("withThumb", {
    is: true,
    then: (schema) =>
      schema
        .required("Link thumbnail wajib diisi")
        .matches(DRIVE_URL_STRING_REGEX, "Bukan link Google Drive"),
  }),
  title: yup.string().required("Judul wajib diisi"),
  description: yup.string().optional(),
});

type tUploadVideo = {
  vid_link: string;
  thumb_link?: string;
  title: string;
  description: string;
};

const getInputClass = (isError: boolean) =>
  clsx(
    "transition duration-200 ease-in-out block w-full p-2.5 text-sm rounded-lg border-2 outline-none",
    isError
      ? "bg-red-50 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
      : "bg-gray-50/30 border-gray-300 text-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 focus:shadow-blue-400/50 dark:bg-gray-800/30 dark:border-gray-600 dark:text-white dark:placeholder-gray-300",
  );

export default function UploadVideo() {
  TabTitle(`Video | Form | ${NameIndexPage}`);
  const navigate = useNavigate();
  const [withThumb, setWithThumb] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: tUploadVideo) => {
      const { data } = await axiosInstance.post<ISuccessResponse<IVideo>>(
        "/vagta/video",
        values,
      );
      return data.data;
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      error.response?.data.errors?.forEach((err) =>
        setFieldError(err.field, err.message),
      );
    },
    onSuccess: () => navigate("/album/video"),
  });

  const {
    handleSubmit,
    dirty,
    handleChange,
    setFieldError,
    errors,
    touched,
    values,
  } = useFormik<tUploadVideo>({
    initialValues: { title: "", description: "", thumb_link: "", vid_link: "" },
    validationSchema: uploadVideoSchema,
    onSubmit: (formValues) => {
      const payload = { ...formValues };
      if (!withThumb) delete payload.thumb_link;

      mutate(payload);
    },
  });

  const ErrorMsg: FC<{ name: keyof tUploadVideo }> = ({ name }) =>
    errors[name] && touched[name] ? (
      <p className="mt-1 text-sm text-red-600 dark:text-red-500">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="mb-6">
        <label
          htmlFor="vid_link"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Link Video
        </label>
        <Input
          id="vid_link"
          name="vid_link"
          className={getInputClass(!!(errors.vid_link && touched.vid_link))}
          value={values.vid_link}
          onChange={handleChange}
          placeholder="https://drive.google.com/file/d/..."
          disabled={isPending}
        />
        <ErrorMsg name="vid_link" />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="with_thumb"
            className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
            checked={withThumb}
            onChange={(e) => setWithThumb(e.target.checked)}
            disabled={isPending}
          />
          <label
            htmlFor="with_thumb"
            className="text-sm font-medium text-gray-900 dark:text-white"
          >
            Gunakan Thumbnail
          </label>
        </div>

        {withThumb && (
          <div className="animate-in fade-in mt-3 duration-300">
            <Input
              id="thumb_link"
              name="thumb_link"
              className={getInputClass(
                !!(errors.thumb_link && touched.thumb_link),
              )}
              value={values.thumb_link}
              onChange={handleChange}
              placeholder="Link thumbnail drive..."
              disabled={isPending}
            />
            <ErrorMsg name="thumb_link" />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Judul Video
        </label>
        <Input
          id="title"
          name="title"
          className={getInputClass(!!(errors.title && touched.title))}
          value={values.title}
          onChange={handleChange}
          placeholder="Masukkan judul..."
          disabled={isPending}
        />
        <ErrorMsg name="title" />
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Deskripsi
        </label>
        <Textarea
          id="description"
          name="description"
          className={clsx(
            getInputClass(!!(errors.description && touched.description)),
            "min-h-30",
          )}
          value={values.description}
          onChange={handleChange}
          disabled={isPending}
        />
        <ErrorMsg name="description" />
      </div>

      <button
        disabled={isPending || !dirty}
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium text-white transition duration-200 hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-gray-400 sm:w-auto"
      >
        {isPending ? "Mengirim..." : "Tambah"}
      </button>
    </form>
  );
}
