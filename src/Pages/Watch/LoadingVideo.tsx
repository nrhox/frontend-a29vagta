export default function LoadingVideo() {
  return (
    <div className="mb-3 max-w-full md:mx-5 md:mr-8 md:mb-4 lg:max-w-[70%] lg:min-w-[50%]">
      <div
        className="flex w-full items-center justify-center bg-gray-400 bg-cover text-center text-xl dark:bg-gray-700 dark:text-white"
        style={{ aspectRatio: 8.7 / 4.9 }}
      ></div>
      <div className="px-4 pt-2 pb-4 md:px-0 md:pt-2 md:pb-5">
        <div className="mb-2.5 h-5 max-w-[86%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-4 max-w-[15%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
        <hr className="my-2 border-gray-400/90 dark:border-gray-600" />
        <div className="font-roboto whitespace-pre-line dark:text-gray-300">
          <div className="mb-[0.4rem] h-3 max-w-[20%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
          <div className="mb-[0.4rem] h-3 max-w-[24%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
          <div className="mb-[0.4rem] h-3 max-w-[23%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
          <div className="mb-[0.4rem] h-3 max-w-[23%] rounded-sm bg-gray-400/80 dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="h-1 w-full bg-gray-200 opacity-75 lg:hidden dark:bg-gray-500"></div>
    </div>
  );
}
