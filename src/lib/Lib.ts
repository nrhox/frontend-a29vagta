type tLib = {
  apiPoint: string;
  keyData: string;
  origin: string;
};

export const lib: tLib = {
  apiPoint: "https://backend-a29vagta.vercel.app/api/",
  keyData: "EzL8m8zkUW_XsGNTjm24pEJu6akCy_cUp8GvGWvlTHdeqHoUDr9O8pLtB_q0",
  origin: window.location.origin,
};

export function timeSince(date: string | number | Date) {
  const newDate = new Date(date);

  const seconds = Math.floor((new Date().valueOf() - newDate.valueOf()) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) return interval + " tahun yang lalu";

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return interval + " bulan yang lalu";

  interval = Math.floor(seconds / 604800);
  if (interval >= 1) return interval + " minggu yang lalu";

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return interval + " hari yang lalu";

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return interval + " jam yang lalu";

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return interval + " menit yang lalu";

  return "baru saja";
}

export const TabTitle = (newTitle: string) => {
  return (document.title = newTitle);
};

const defaultDescription =
  "website ix a angkatan 29 smpn 1 pagedangan atau vagta";

export const metaDescription = (newDescription: string) => {
  return document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", newDescription || defaultDescription);
};

const defaultSViewPort = "width=device-width, initial-scale=1";
const SetUPViewPort = "maximum-scale=1.0, user-scalable=no";

export const metaViewPort = (SetViportSetUP: string, isZoom?: boolean) => {
  return document
    .querySelector('meta[name="viewport"]')
    ?.setAttribute(
      "content",
      isZoom
        ? `${defaultSViewPort}, ${SetViportSetUP}`
        : `${defaultSViewPort}, ${SetUPViewPort}`,
    );
};

export const NameIndexPage = "IX A 29 - SMPN 1 PAGEDANGAN";

export async function FetchRequest(
  url: RequestInfo | URL,
  data?: RequestInit,
): Promise<Response> {
  const Respon = await fetch(url, data);
  return await Respon.json();
}

export const SatuanWaktu = {
  tahun: 31536000,
  bulan: 2592000,
  minggu: 604800,
  hari: 86400,
  jam: 3600,
  menit: 60,
};

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function LocaleFormatIndonesia(
  currentDate: Date | string | number,
  since: boolean = false,
  sinceState: number = 60,
  afterDate: number = 3,
) {
  const d = new Date(currentDate);
  const year = d.getFullYear();
  const month = months[d.getMonth()] ?? "";
  const date = d.getDate();
  const day = days[d.getDay()] ?? "";
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();

  const Tanggal = day + ", " + date + " " + month + " " + year;
  const Waktu = "Jam: " + hour + ":" + minute + ":" + second;
  const TanggalNotHari = date + " " + month + " " + year;

  const ObjFormat = { Tanggal, Waktu, TanggalNotHari };

  if (since) {
    const seconds = Math.floor((new Date().valueOf() - d.valueOf()) / 1000);

    const interval = Math.floor(seconds / sinceState);
    if (interval >= afterDate) return ObjFormat;
    return;
  }
  return ObjFormat;
}

export function ImageToBase64(
  imgUrl: string,
  callback?: (data: string) => void,
) {
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.src = imgUrl;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = image.naturalHeight;
  canvas.width = image.naturalWidth;
  ctx?.drawImage(image, 0, 0);
  const dataUrl = canvas.toDataURL();
  if (callback) {
    callback(dataUrl);
  }
  return dataUrl;
}

export const DRIVE_URL_STRING_REGEX =
  /^(http(s)?:\/\/)?(www.)?drive.google.([a-zA-Z0-9-]{1,61}|[a-z0-9-]{1,30})\/file\/d\/([a-zA-Z0-9])/i;
