import { memo } from "react";
import { Outlet } from "react-router-dom";
import ButtonActive from "../../components/NavLinkCustom/ButtonActive";
import { NameIndexPage, TabTitle } from "../../lib/Lib";

const menus = [
  {
    to: "/upload",
    label: "Foto",
  },
  {
    to: "/upload/video",
    label: "Video",
  },
];

function UploadPage() {
  TabTitle("Form | " + NameIndexPage);
  return (
    <div className="min-h-[85vh]">
      <div className="my-4 flex justify-center">
        <div className="w-full max-w-[95%] border border-gray-200 bg-white/80 p-5 px-7 shadow sm:max-w-md sm:p-6 md:max-w-lg md:p-8 dark:border-gray-700 dark:bg-gray-800/80">
          <div className="mb-5 inline-flex overflow-hidden rounded-md shadow-sm">
            {menus.map((menu, i) => (
              <ButtonActive
                to={menu.to}
                key={i}
                className="px-4 py-2 text-sm font-medium dark:text-white [.active]:bg-blue-500 [.active]:text-white [.active]:dark:bg-blue-500"
              >
                {menu.label}
              </ButtonActive>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default memo(UploadPage);
