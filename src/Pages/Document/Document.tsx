import { memo } from "react";
import { Link } from "react-router-dom";
import { BrandTitle } from "../../components/Base/Brand";
import {
  BadgeBendahara,
  BadgeChairman,
  BadgeDevTeam,
  BadgeEagle,
  BadgeFlower,
  BadgeOsis,
  BadgeSekretaris,
  BadgeViceChairman,
} from "../../lib/AssetIcon/IconCustom";
import { NameIndexPage, TabTitle } from "../../lib/Lib";

function Document() {
  TabTitle("Dokumentasi | " + NameIndexPage);

  return (
    <>
      <div className="mx-4 my-6 mt-3 flex justify-center md:mx-10">
        <div className="lg:max-w-[80%]">
          <div className="font-roboto mb-3 pb-4">
            <h1
              className="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              id="content"
            >
              <BrandTitle /> - Question
            </h1>
            <p className="mb-4 text-justify text-lg text-gray-500 dark:text-gray-400">
              <span className="ml-8" />
              Mulailah mengupload gambar maupun video kalian agar dapat dilihat
              dan dinikmati bagi orang yang memiliki penyimpanan terbatas, untuk
              mengingatkan kembali tentang kelas IX A angkatan 29 {" :-)"}.
            </p>
          </div>
          <hr className="border border-gray-500 dark:border-gray-200" />
          <div id="upload-content" className="dark:text-white">
            <h2
              id="introduction"
              className="group relative mt-8 mb-4 text-2xl font-semibold"
            >
              Instruksi
              <span className="absolute -top-35"></span>
              <a
                className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
                href="#introduction"
                aria-label="Link to this section: Introduction"
              >
                #
              </a>
            </h2>
            <h3 className="group relative mt-6 mb-4 text-xl font-semibold">
              Mengirim media
              <span id="Mengirimmedia" className="absolute -top-35"></span>
              <a
                className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
                href="#Mengirimmedia"
                aria-label="Link to this section: Introduction"
              >
                #
              </a>
            </h3>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">1.</span>
                <p>
                  Upload terlebih dahulu foto maupun video kegoogle drive,{" "}
                  <a
                    className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500"
                    href="https://support.google.com/drive/answer/2424368?hl=id"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    cara upload file ke drive
                  </a>
                  , upload sampai selesai.
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">2.</span>
                <p>
                  Ubah akses file yang awanya private menjadi public,{" "}
                  <a
                    className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500"
                    href="https://support.google.com/drive/answer/2494822?hl=id#zippy=%2Cmengizinkan-akses-umum-ke-file"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Mengizinkan akses umum ke file Google Drive.
                  </a>
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">3.</span>
                <p>
                  Salin link file yang akan di kirimkan,{" "}
                  <a
                    className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500"
                    href="https://support.google.com/googleone/answer/2494822?hl=id#zippy=%2Cmembagikan-file-secara-publik"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Membagikan File Secara publik Google Drive
                  </a>
                  , atau{" "}
                  <a
                    className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500"
                    href="https://www.youtube.com/results?search_query=cara+menyalin+link+google+drive"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Tonton di Youtube
                  </a>
                  .
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">4.</span>
                <p>
                  Tempel link sesuai pada tempatnya{" "}
                  <Link
                    to={"/upload"}
                    className="text-blue-700 hover:text-blue-500 hover:underline dark:text-blue-500"
                  >
                    Form
                  </Link>{" "}
                  dan jangan lupa isi judul dan deskripisinya.
                </p>
              </li>
            </ol>
            <ol className="mb-4">
              <li className="flex flex-row">
                <span className="mr-2">5.</span>
                <p>
                  Selesai {" :-)"}, jika masih bingung bisa hubungi{" "}
                  <span className="text-blue-700 dark:text-blue-500">
                    Admin Developer
                  </span>
                  .
                </p>
              </li>
            </ol>
          </div>

          <div id="information" className="dark:text-white">
            <h2
              id="information"
              className="group relative mt-8 mb-4 text-2xl font-semibold"
            >
              Information
              <span className="absolute -top-35"></span>
              <a
                className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
                href="#information"
                aria-label="Link to this section: Introduction"
              >
                #
              </a>
            </h2>
            <h3 className="group relative mt-6 mb-4 text-xl font-semibold">
              Lencana ( Badge )
              <span id="lecana" className="absolute -top-35"></span>
              <a
                className="ml-2 text-blue-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-500"
                href="#lecana"
                aria-label="Link to this section: Introduction"
              >
                #
              </a>
            </h3>

            <div className="relative max-w-95 overflow-x-auto rounded-xl border border-gray-500 shadow-md md:max-w-screen-sm dark:border-gray-600 dark:text-white">
              <table className="w-full table-auto text-left text-sm text-gray-900 dark:text-white">
                <thead className="border-b border-gray-500/70 bg-gray-50 text-xs text-gray-900 uppercase dark:bg-gray-700/70 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Icon
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Lencana
                    </th>
                  </tr>
                </thead>
                <tbody className="capitalize">
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeEagle className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Siswa
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeFlower className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      siswi
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeChairman className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Ketua kelas
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeViceChairman className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Wakil Ketua kelas
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeOsis className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      anggota Osis
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeSekretaris className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      sekretaris
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeBendahara className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Bendahara
                    </td>
                  </tr>
                  <tr className="border-b border-gray-500 bg-white/70 dark:border-gray-700 dark:bg-gray-900/70">
                    <th scope="row" className="px-6 py-2">
                      <BadgeDevTeam className="h-9 w-9" />
                    </th>
                    <td className="px-3 py-2 text-lg font-medium whitespace-nowrap text-gray-900 dark:text-white">
                      Dev team
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Document);
