import type { ReactNode } from "react";

export type tInfoContent = {
  title: string;
  content: ReactNode;
  listContent?: string[];
};

interface props extends tInfoContent {
  index: number;
}
export default function CardInfoList({
  content,
  title,
  listContent,
  index,
}: props) {
  return (
    <div className="group relative flex flex-col">
      <h2 className="text-lg font-bold tracking-wide text-black uppercase dark:text-white">
        <span className="mr-1 font-mono text-xl font-bold text-black dark:text-white">
          {index.toString().padStart(2, "0")}.
        </span>
        {title}
      </h2>
      <p className="text-justify text-lg leading-relaxed text-black md:ml-10 dark:text-gray-300">
        {content}
        {listContent && (
          <ul className="mt-3 list-inside list-decimal space-y-1 text-black dark:text-gray-300">
            {listContent.map((list, idx) => (
              <li key={index + "_" + idx}>{list}</li>
            ))}
          </ul>
        )}
      </p>
    </div>
  );
}
