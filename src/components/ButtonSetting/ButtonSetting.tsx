import { useState } from "react";
import ButtonAbout from "./ButtonAbout";
import ButtonQuetion from "./ButtonQuetion";
import ButtonToTop from "./ButtonToTop";
import ButtonTrigerOpen from "./ButtonTrigerOpen";
import ThemesButton from "./ThemesButton";

export default function ButtonSetting() {
  const [isOpen, SetOpen] = useState(false);

  return (
    <div className="fixed right-8 bottom-16 z-10 lg:hidden">
      <div className="relative">
        <ButtonToTop OnOpen={isOpen} callback={() => SetOpen(false)} />
        <ButtonAbout OnOpen={isOpen} />
        <ThemesButton OnOpen={isOpen} />
        <ButtonQuetion OnOpen={isOpen} />
        <ButtonTrigerOpen isOpen={isOpen} callback={(e) => SetOpen(e)} />
      </div>
    </div>
  );
}
