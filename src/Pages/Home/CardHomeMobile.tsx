import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../components/Base/LazyImage";
import ModalImage from "./ModalImage";

interface CardHomeMobileProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  image: string;
  title: string;
  to: string;
  onClick?: MouseEventHandler;
}

export default function CardHomeMobile({
  image,
  title,
  to,
  onClick,
  ...props
}: CardHomeMobileProps) {
  const navigate = useNavigate();
  const [isModalShow, setShowModal] = useState(false);

  const handlerClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(to);
  };

  function centexHnadler(e: MouseEvent) {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <>
      <div
        onContextMenu={(e) => centexHnadler(e)}
        onClick={(e) => handlerClick(e)}
        className="group relative inline-flex select-none"
        {...props}
      >
        <div className="block aspect-square w-full overflow-hidden rounded-lg shadow-xl">
          <LazyImage className="h-full w-full" ratio={1 / 1}>
            <img
              className="h-full w-full object-cover transition-all duration-400 ease-in-out group-active:scale-[1.2] group-active:brightness-[0.6]"
              src={image}
              alt={title}
              onContextMenu={(e) => e.preventDefault()}
            />
          </LazyImage>
        </div>
      </div>

      {isModalShow ? (
        <ModalImage
          Image={image}
          close={() => setShowModal(false)}
          isModalShow={isModalShow}
        />
      ) : null}
    </>
  );
}
