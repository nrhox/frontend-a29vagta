import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import clsx from "clsx";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Input from "../../../components/Base/Input";
import Textarea from "../../../components/Base/Textarea";
import axiosInstance from "../../../lib/axiosInstance";
import {
  DRIVE_URL_STRING_REGEX,
  NameIndexPage,
  TabTitle,
} from "../../../lib/Lib";
import type { IErrorResponse, ISuccessResponse } from "../../../types/response";
import type { IImage } from "../../../types/vagta";

type tUploadImage = {
  title: string;
  description: string;
  img_link: string;
};

const uploadImageSchema = yup.object({
  title: yup.string().required("Wajib diisi"),
  description: yup.string().optional(),
  img_link: yup
    .string()
    .required("Wajib diisi")
    .matches(DRIVE_URL_STRING_REGEX, "Link bukan Google Drive"),
});

interface FieldConfig {
  name: keyof tUploadImage;
  label: string;
  placeholder?: string;
  isTextarea?: boolean;
}

const FORM_FIELDS: FieldConfig[] = [
  {
    name: "img_link",
    label: "Tautan Gambar",
    placeholder: "https://drive.google.com/...",
  },
  { name: "title", label: "Judul" },
  { name: "description", label: "Deskripsi", isTextarea: true },
];

const inputClasses = (isError: boolean) =>
  clsx(
    "transition duration-200 ease-in-out block w-full p-2.5 text-sm rounded-lg border-2 outline-none",
    isError
      ? "bg-red-50 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
      : "bg-gray-50/30 border-gray-300 text-gray-900 shadow-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800/30 dark:border-gray-600 dark:text-white",
  );

export default function UploadFoto() {
  TabTitle(`Foto | Form | ${NameIndexPage}`);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: tUploadImage) => {
      const res = await axiosInstance.post<ISuccessResponse<IImage>>(
        "/vagta/image",
        values,
      );
      return res.data.data;
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      error.response?.data.errors?.forEach((err) =>
        setFieldError(err.field, err.message),
      );
    },
    onSuccess: () => navigate("/album"),
  });

  const {
    handleSubmit,
    handleChange,
    setFieldError,
    errors,
    touched,
    values,
    dirty,
  } = useFormik<tUploadImage>({
    initialValues: { title: "", description: "", img_link: "" },
    validationSchema: uploadImageSchema,
    onSubmit: (vals) => mutate(vals),
  });

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      {FORM_FIELDS.map((field) => {
        const hasError = !!(errors[field.name] && touched[field.name]);
        const Component = field.isTextarea ? Textarea : Input;

        return (
          <div className="mb-6" key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {field.label}
            </label>

            <Component
              id={field.name}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              disabled={isPending}
              className={clsx(
                inputClasses(hasError),
                field.isTextarea && "min-h-30",
              )}
            />

            {hasError && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                {errors[field.name]}
              </p>
            )}
          </div>
        );
      })}

      <button
        disabled={isPending || !dirty}
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium text-white transition duration-200 hover:bg-blue-800 disabled:bg-gray-400 sm:w-auto"
      >
        {isPending ? "Loading..." : "Tambah"}
      </button>
    </form>
  );
}
