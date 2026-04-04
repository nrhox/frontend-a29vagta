import NavLinkCustom from "../../components/NavLinkCustom/NavLinkCustom";

export default function SubMenuMemory() {
  const menus = [
    {
      to: "/album",
      title: "Foto",
    },
    {
      to: "/album/video",
      title: "Video",
    },
    {
      to: "/album/teman",
      title: "Presensi ",
    },
  ];

  return (
    <nav className="mx-auto mb-3 hidden max-w-7xl px-9 md:block md:px-6">
      <ul className="mt-4 mb-3 flex flex-row items-center font-medium lg:text-lg">
        {menus.map((menu, idx) => (
          <NavLinkCustom
            key={idx}
            to={menu.to}
            className="border-b-3 border-b-transparent px-3 pb-1.5 text-gray-900 transition duration-200 ease-in-out hover:border-b-blue-600 dark:text-white [.active]:border-b-blue-700"
          >
            {menu.title}
          </NavLinkCustom>
        ))}
      </ul>
    </nav>
  );
}
