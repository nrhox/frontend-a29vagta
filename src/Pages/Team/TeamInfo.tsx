import { BrandTitle2 } from "../../components/Base/Brand";
import type { ITeam } from "../../types/team";

const githubUrl = "https://github.com";

const teams: ITeam[] = [
  {
    full_name: "Jalu",
    github_name: "nrhox",
  },
];

export default function TeamInfo() {
  return (
    <>
      <div className="mx-4 mt-3 flex justify-center pb-5 md:mx-10">
        <div className="font-sans lg:max-w-[80%]">
          <div>
            <h1 className="font-roboto inline-block text-[2rem] font-bold tracking-tight text-black dark:text-white">
              Informasi Tambahan
            </h1>
            <p className="mb-4 text-justify text-lg font-light dark:text-gray-300">
              <span className="mr-10" /> Kelas 9A angkatan 29 merupakan salah
              satu kelas di SMPN 1 Pagedangan yang penuh dengan semangat dan
              dedikasi. Mereka adalah kelompok siswa yang berbakat, cerdas, dan
              memiliki motivasi tinggi dalam mengejar prestasi akademik dan
              non-akademik. Dalam lingkungan sekolah, mereka dikenal sebagai
              kelompok yang solid dan saling mendukung.
            </p>
            <p className="mb-11 text-justify text-lg font-light dark:text-gray-300">
              <span className="mr-10" /> Dengan kehadiran guru yang berkompeten
              dan fasilitas yang memadai di SMPN 1 Pagedangan, kelas 9A angkatan
              29 memiliki kesempatan untuk berkembang secara optimal.
              Kebersamaan dan kolaborasi adalah nilai yang ditanamkan dalam
              kelas ini, sehingga setiap individu memiliki peran penting dalam
              mencapai tujuan bersama..
            </p>
            <p className="mb-4 text-justify text-base font-light dark:text-gray-300">
              <BrandTitle2 /> dikelola oleh tim pendiri dan sekelompok kecil
              kontributor.
            </p>
            <ul className="bg-opacity-70 mb-4 w-[90%] rounded-lg border border-gray-500 bg-white text-base font-medium text-gray-900 sm:w-[70%] dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {teams.map((team, i: number) => {
                return (
                  <a
                    key={i}
                    target="_blank"
                    href={`${githubUrl}/${team.github_name}`}
                    rel="noreferrer"
                    className="inline-flex w-full items-center border-b border-gray-500 px-4 py-2 align-middle first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600"
                  >
                    <img
                      src={`${githubUrl}/${team.github_name}.png`}
                      width="40"
                      height="40"
                      className="rounded-lg"
                      alt={team.full_name}
                    />
                    <div className="ml-2 flex items-baseline">
                      <span className="mr-1">{team.full_name}</span>
                      <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                        @{team.github_name}
                      </span>
                    </div>
                  </a>
                );
              })}
            </ul>
            <p className="mb-2 text-justify text-base font-light dark:text-gray-300">
              Kalau ada yang mau ikut membangun atau pun memperbaiki{" "}
              <BrandTitle2 /> dibagian front end, boleh langsung ke{" "}
              <a
                href="https://github.com/nrhox/frontend-a29vagta"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 underline dark:text-blue-400"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
