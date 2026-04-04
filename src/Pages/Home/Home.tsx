import { memo } from "react";
import { NameIndexPage, TabTitle } from "../../lib/Lib";
import SectionAjakan from "./SectionAjakan";
import SectionPost from "./SectionPost";
import SectionWelcome from "./SectionWelcome";

function Home() {
  TabTitle(NameIndexPage);

  return (
    <div className="relative">
      <div className="bg-hero"></div>
      <div className="absolute top-0 z-1 w-full">
        <SectionWelcome />
      </div>
      <div className="bg-white pt-5 pb-10 dark:bg-gray-900">
        <div className="mt-3 mb-8 h-full md:mx-4">
          <SectionPost />
        </div>
        <SectionAjakan />
      </div>
    </div>
  );
}

export default memo(Home);
