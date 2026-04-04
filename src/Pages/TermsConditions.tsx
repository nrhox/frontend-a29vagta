import type { tInfoContent } from "../components/CardInfoList";
import CardInfoList from "../components/CardInfoList";

const contactIG = "https://ig.me/m/jl.nc18";

const TERM_SECTIONS: tInfoContent[] = [
  {
    title: "Penggunaan Layanan",
    content:
      "Aplikasi ini adalah platform album bersama. Dengan menggunakan layanan ini, Anda setuju untuk tidak melakukan hal-hal berikut",
    listContent: [
      "Melakukan spamming dalam bentuk apa pun.",
      "Mengunggah konten yang mengandung SARA, rasisme, kekerasan, atau pornografi.",
      "Melakukan tindakan yang merugikan integritas sistem (hacking/vandalism).",
    ],
  },
  {
    title: "Akun dan Keamanan",
    content:
      "Layanan ini tidak menggunakan sistem akun. Segala aktivitas yang terdeteksi melalui Alamat IP Anda adalah tanggung jawab Anda sepenuhnya. Kami berhak memblokir Alamat IP secara sepihak jika ditemukan pelanggaran.",
  },
  {
    title: "Hak Kekayaan Intelektual",
    content: (
      <>
        Seluruh kode program, dan logo IX A 29 VAGTA adalah milik{" "}
        <span className="mx-1 font-bold text-black dark:text-white">
          Jalu Nugroho
        </span>
        . Namun, hak cipta atas konten (foto/gambar) yang diunggah tetap menjadi
        milik pengguna yang mengunggahnya.
      </>
    ),
  },
  {
    title: "Batasan Tanggung Jawab",
    content:
      'Layanan ini disediakan "sebagaimana adanya". Kami tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan teknis, kegagalan sistem, atau hilangnya konten yang diunggah.',
  },
  {
    title: "Hukum yang Berlaku",
    content: (
      <>
        Syarat dan Ketentuan ini tunduk pada hukum{" "}
        <span className="mx-1 font-bold text-black dark:text-white">
          Republik Indonesia
        </span>
        . Segala perselisihan akan diselesaikan melalui musyawarah atau jalur
        hukum yang berlaku di Indonesia.
      </>
    ),
  },
  {
    title: "Kontak",
    content: (
      <>
        Pertanyaan lebih lanjut mengenai aturan ini dapat dikirimkan melalui
        Direct Message Instagram ke{" "}
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

export default function TermsConditions() {
  const lastUpdated = "4 April 2026";

  return (
    <div className="mx-4 mt-3 mb-10 flex justify-center md:mx-10">
      <div className="font-sans lg:max-w-[80%]">
        <header className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Syarat dan Ketentuan
          </h1>
          <p className="mt-1 text-lg text-black dark:text-gray-400">
            IX A 29 VAGTA — Terakhir diperbarui {lastUpdated}
          </p>
        </header>

        <div className="space-y-4 font-sans">
          {TERM_SECTIONS.map((item, index) => (
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
