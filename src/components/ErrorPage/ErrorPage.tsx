import { Link } from "react-router-dom";

interface ErrorPageProps {
  ErrorCode?: number | string;
  message?: string;
  Redirect?: string;
  callBack?: () => void;
  NullPath?: string;
}

export default function ErrorPage({
  ErrorCode,
  message,
  Redirect = "/",
  callBack,
  NullPath,
}: ErrorPageProps) {
  if (ErrorCode === 404 || ErrorCode === "404") {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <div>
          <h1 className="m-0 mr-5 inline-block border-r border-r-slate-400 pr-5.75 align-top text-[24px] leading-12.25 font-medium dark:border-r-white dark:text-white">
            {ErrorCode}
          </h1>
          <div className="inline-block h-12.25 text-left align-middle leading-12.25">
            <h2 className="m-0 p-0 text-[20px] leading-12.25 font-normal dark:text-white">
              {message ? message : "This page could not be found."}{" "}
              <span className="text-[18px] font-bold">{"ㄟ( ▔, ▔ )ㄏ"}</span>
            </h2>
          </div>
          {NullPath ? (
            <p className="m-0 p-0 text-[20px] leading-6.25 font-normal">
              Route :{" "}
              <code className="overflow-x-auto rounded-md bg-slate-300 p-1 font-mono font-extralight text-gray-900 dark:text-gray-100">
                {NullPath}
              </code>
            </p>
          ) : null}
        </div>
        <div>
          {callBack ? (
            <button
              onClick={() => callBack()}
              className="mx-2 my-3 inline-block rounded-md bg-blue-500 px-4 py-2 text-white shadow-md duration-200 ease-in-out hover:bg-blue-600 active:bg-blue-800"
            >
              Refresh
            </button>
          ) : null}
          <Link
            to={Redirect}
            className="mx-2 my-3 inline-block rounded-md bg-blue-500 px-4 py-2 text-white shadow-md duration-200 ease-in-out hover:bg-blue-600 active:bg-blue-800"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div>
        <h1 className="m-0 mr-5 inline-block border-r border-r-slate-400 pr-5.75 align-top text-[24px] leading-12.25 font-medium dark:border-r-white dark:text-white">
          {ErrorCode}
        </h1>
        <div className="inline-block h-12.25 text-left align-middle leading-12.25">
          <h2 className="m-0 p-0 text-[20px] leading-12.25 font-normal dark:text-white">
            {message} {"〜(￣▽￣〜)"}
          </h2>
        </div>
      </div>
      <div>
        {callBack ? (
          <button
            onClick={() => callBack()}
            className="mx-2 my-3 inline-block rounded-md bg-blue-500 px-4 py-2 text-white shadow-md duration-200 ease-in-out hover:bg-blue-600 active:bg-blue-800"
          >
            Refresh
          </button>
        ) : null}
        <Link
          to={Redirect}
          className="mx-2 my-3 inline-block rounded-md bg-blue-500 px-4 py-2 text-white shadow-md duration-200 ease-in-out hover:bg-blue-600 active:bg-blue-800"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
