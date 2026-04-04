import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSettingStore } from "../../stores/useSettingStore";
import { Brand, BrandTitle2 } from "../Base/Brand";
import ButtonLinkActive from "../NavLinkCustom/ButtonLinkActive";

interface NavLinkItem {
  to: string;
  title: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { to: "/", title: "Home" },
  { to: "/question", title: "Question" },
  { to: "/album", title: "Album" },
  { to: "/upload", title: "Form" },
];

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { pathname } = useLocation();

  const { setTheme, theme } = useSettingStore();

  const isHomePage: boolean = pathname === "/";

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header
      className={clsx(
        "top-0 z-40 flex w-full items-center transition-all duration-300 ease-in-out select-none",
        isHomePage ? (isScrolled ? "fixed" : "absolute") : "sticky",
        isScrolled
          ? "bg-white/30 text-gray-800 shadow-xl shadow-gray-800/25 backdrop-blur-md dark:bg-gray-800/40 dark:shadow-gray-700/60"
          : isHomePage
            ? "bg-transparent"
            : "bg-white dark:bg-gray-900",
      )}
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between px-4 pt-1 pb-2">
          <div className="py-1.5">
            <Link to="/" className="text-primary flex items-center font-bold">
              <Brand className="mr-1 aspect-square w-8" alt="my logo" />
              <BrandTitle2 className="text-blue-500" />
            </Link>
          </div>

          <div className="hidden items-center lg:flex">
            <nav>
              <ul className="flex items-center space-x-1">
                {NAV_LINKS.map((link) => (
                  <ButtonLinkActive
                    key={link.to}
                    to={link.to}
                    className={clsx(
                      "mx-2 my-1 flex items-center rounded-lg px-4 py-2 text-base font-medium transition-all duration-300 lg:my-0",
                      "[.active]:bg-primary! hover:bg-teal-600 hover:text-white active:bg-teal-700 [.active]:text-white!",
                      {
                        "text-black dark:text-black": isHomePage && !isScrolled,
                        "text-black dark:text-white":
                          !isHomePage || (isHomePage && isScrolled),
                      },
                    )}
                  >
                    {link.title}
                  </ButtonLinkActive>
                ))}

                <button
                  onClick={toggleTheme}
                  className="ml-2 rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                  title="Ganti Tema"
                >
                  {theme === "light" ? (
                    <MoonIcon className="h-6 w-6 text-amber-500" />
                  ) : (
                    <SunIcon className="h-6 w-6 text-amber-400" />
                  )}
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const MoonIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
      clipRule="evenodd"
    />
  </svg>
);

const SunIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

export default Navbar;
