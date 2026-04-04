import { DetailedHTMLProps, HTMLAttributes } from "react";

export default function SkeletonPost({
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className="group relative inline-flex select-none" {...props}>
      <div className="block aspect-square h-full w-full overflow-hidden rounded-lg">
        <div className="h-80 w-80 bg-[#E0E0E0] dark:bg-[#323d4e]"></div>
      </div>
    </div>
  );
}
