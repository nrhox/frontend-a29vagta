import {
  useEffect,
  useRef,
  useState,
  type DetailedHTMLProps,
  type Dispatch,
  type HTMLAttributes,
  type SetStateAction,
} from "react";

const registerObserver = (
  ref: Element,
  setShowImage: Dispatch<SetStateAction<boolean>>,
  minDelay = 0,
  maxDelay = 0,
) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const RandWacth = (min: number, max: number) => {
        return Math.round(Math.random() * (max - min) + min);
      };
      setTimeout(
        () => {
          setShowImage(true);
        },
        RandWacth(minDelay, maxDelay),
      );
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

interface iLazyImage extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  ratio?: number | string;
  mindelay?: number;
  maxdelay?: number;
  className?: string;
  background?: boolean | true;
}

export default function LazyImage({
  children,
  ratio,
  mindelay,
  maxdelay,
  className = "",
  background = true,
  ...props
}: iLazyImage) {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      registerObserver(
        imageRef.current,
        setShowImage,
        mindelay ?? 0,
        maxdelay ?? 0,
      );
    }
  }, [mindelay, maxdelay]);

  return (
    <>
      {showImage ? (
        <div
          className={`${className} m-0 p-0 ${background ? "bg-[#E0E0E0] dark:bg-[#323d4e]" : ""}`}
          {...props}
          style={{ aspectRatio: ratio ? ratio : 8.7 / 4.9 }}
        >
          {children}
        </div>
      ) : (
        <div
          ref={imageRef}
          className={`flex aspect-[8.7/4.9] w-full flex-col items-center justify-center text-center text-white ${background ? "bg-[#E0E0E0] dark:bg-[#323d4e]" : ""}`}
        ></div>
      )}
    </>
  );
}
