import {
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  YoutubeIcon,
} from "../../lib/AssetIcon/BrandIcon";
import { Brand, BrandTitle2 } from "../Base/Brand";
import ButtonLink from "../NavLinkCustom/ButtonLink";

type tLink = {
  name: string;
  href?: string;
  to?: string;
};

type tItemGroup = {
  title: string;
  links: tLink[];
};

const FOOTER_SECTIONS: tItemGroup[] = [
  {
    title: "Resources",
    links: [
      { name: "Flowbite", href: "https://flowbite.com/" },
      { name: "React router", href: "https://reactrouter.com/" },
      { name: "Framer Motion", href: "https://www.framer.com/motion/" },
      { name: "Hero icons", href: "https://heroicons.com/" },
      { name: "Svg repo", href: "https://www.svgrepo.com/" },
    ],
  },
  {
    title: "Framework",
    links: [
      { name: "React", href: "https://react.dev/" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { name: "Vite Js", href: "https://vitejs.dev/" },
    ],
  },
  {
    title: "Follow us",
    links: [
      {
        name: "Instagram IX A",
        href: "https://www.instagram.com/ix.apaantuh/",
      },
      {
        name: "Github Dev",
        href: "https://github.com/nrhox/frontend-a29vagta",
      },
    ],
  },
  {
    title: "Official Social Media",
    links: [
      { name: "Website", href: "https://smpn1pagedangan.sch.id/" },
      {
        name: "Instagram",
        href: "https://www.instagram.com/smpn1pagedangan_vaghta/",
      },
      { name: "Youtube", href: "https://www.youtube.com/@smpn1pagedangan14" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms & Conditions", to: "/terms-conditions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Developer", href: "https://ig.me/m/jl.nc18" },
      { name: "Instagram Admin", href: "https://ig.me/m/ix.apaantuh" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@smpn1pagedangan14",
    label: "Youtube",
    color: "hover:opacity-100 opacity-60",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/ix.apaantuh/",
    label: "Instagram",
    color: "hover:opacity-100 opacity-60",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/nrhox/frontend-a29vagta",
    label: "Github",
    color: "text-gray-500 hover:text-black dark:hover:text-white",
  },
  {
    icon: GlobeIcon,
    href: "https://smpn1pagedangan.sch.id/",
    label: "Website",
    color: "text-gray-500 hover:text-blue-700",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 border border-gray-200 bg-white p-4 sm:p-6 lg:mb-0 dark:border-gray-700 dark:bg-gray-900">
      <div className="lg:mx-7 lg:flex lg:justify-between">
        <div className="mb-6 xl:mb-0">
          <ButtonLink to="/" className="flex items-center">
            <Brand className="mr-2 aspect-square h-10 w-12" alt="Logo" />
            <span className="self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white">
              <BrandTitle2 className="text-blue-500" />
            </span>
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-5">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="lg:mx-0">
              <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {section.title}
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {section.links.map((link) => (
                  <li key={link.name} className="mb-1">
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <ButtonLink
                        to={link?.to || ""}
                        className="hover:underline"
                      >
                        {link.name}
                      </ButtonLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-gray-200 lg:my-8 dark:border-gray-700" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2023 - {currentYear}
          <ButtonLink to="/team" className="ml-1 text-blue-600 hover:underline">
            <BrandTitle2 />™
          </ButtonLink>
          . All Rights Reserved.
        </span>

        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`transition-all duration-150 ${color}`}
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
