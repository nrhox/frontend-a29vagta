import type { tInfoContent } from "../components/CardInfoList";
import CardInfoList from "../components/CardInfoList";

const contactIG = "https://ig.me/m/jl.nc18";

const POLICY_SECTIONS: tInfoContent[] = [
  {
    title: "Informasi yang Kami Kumpulkan",
    content: (
      <>
        Kami tidak menyediakan fitur pendaftaran akun, sehingga kami tidak
        memungut data pribadi seperti nama, email, atau nomor telepon. Namun,
        sistem kami secara otomatis mencatat
        <span className="mx-1 font-bold text-black dark:text-white">
          Alamat IP (Internet Protocol)
        </span>
        Anda melalui{" "}
        <i className="text-black dark:text-gray-300">request header</i> saat
        Anda mengakses layanan ini.
      </>
    ),
  },
  {
    title: "Penggunaan Informasi",
    content:
      "Informasi Alamat IP digunakan semata-mata untuk tujuan keamanan, namun tidak terbatas pada:",
    listContent: [
      "Mencegah aktivitas spam dan bot.",
      "Memantau penyalahgunaan sistem",
      "Memblokir akses bagi pengguna yang melanggar aturan komunitas.",
    ],
  },
  {
    title: "Penyimpanan Data",
    content:
      "Seluruh data operasional disimpan di indonesia untuk memastikan akses yang cepat dan kepatuhan data lokal",
  },
  {
    title: "Pengungkapan Pihak Ketiga",
    content: (
      <>
        Kami menjamin bahwa kami{" "}
        <span className="mx-1 font-bold text-black dark:text-white">
          tidak membagikan, menjual, atau menyewakan
        </span>
        informasi teknis Anda kepada pihak ketiga mana pun.
      </>
    ),
  },
  {
    title: "Hak Pengguna & Penghapusan Data",
    content: (
      <>
        Karena kami tidak menyimpan akun, data yang tersimpan umumnya berupa
        konten yang Anda unggah. Jika Anda ingin meminta penghapusan konten
        tertentu, silakan hubungi pengembang melalui Instagram:{" "}
        <a
          className="text-lg font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          href={contactIG}
        >
          @jl.nc18
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const lastUpdated = "4 April 2026";

  return (
    <div className="mx-4 mt-3 mb-10 flex justify-center md:mx-10">
      <div className="font-sans lg:max-w-[80%]">
        <header className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Kebijakan Privasi
          </h1>
          <p className="mt-1 text-lg text-black dark:text-gray-400">
            IX A 29 VAGTA — Terakhir diperbarui {lastUpdated}
          </p>
        </header>

        <div className="space-y-4 font-sans">
          {POLICY_SECTIONS.map((item, index) => (
            <CardInfoList
              content={item.content}
              index={index + 1}
              title={item.title}
              key={index}
              listContent={item.listContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
