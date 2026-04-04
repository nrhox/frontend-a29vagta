import type {
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import LOGO from "../../img/logo.svg";

export function Brand(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) {
  return <img src={LOGO} {...props} />;
}

export function BrandTitle(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
) {
  return (
    <>
      IX A 29 - <span {...props}>1 Vagta</span>
    </>
  );
}

export function BrandTitle2(
  props: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
) {
  return (
    <>
      IX A 29 - <span {...props}>SMPN 1 PAGEDANGAN</span>
    </>
  );
}
