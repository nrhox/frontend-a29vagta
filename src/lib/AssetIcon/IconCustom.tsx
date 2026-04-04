import {
  IconBank,
  IconDev,
  IconEagle,
  IconFlower,
  IconLion,
  IconNote,
  IconSchool,
} from "./Icon";

interface propsIcon {
  classNameIcon?: string;
  className?: string;
}

function BadgeEagle({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 dark:bg-slate-600` +
        " " +
        className
      }
    >
      <IconEagle className={classNameIcon} />
    </div>
  );
}

function BadgeBendahara({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 text-green-600 dark:bg-slate-600 dark:text-green-400` +
        " " +
        className
      }
    >
      <IconBank className={classNameIcon} />
    </div>
  );
}

function BadgeSekretaris({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 text-yellow-600 dark:bg-slate-600 dark:text-yellow-400` +
        " " +
        className
      }
    >
      <IconNote className={classNameIcon} />
    </div>
  );
}

function BadgeDevTeam({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 text-red-600 dark:bg-slate-600 dark:text-red-400` +
        " " +
        className
      }
    >
      <IconDev className={classNameIcon} />
    </div>
  );
}

function BadgeViceChairman({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 text-teal-600 dark:bg-slate-600 dark:text-green-500` +
        " " +
        className
      }
    >
      <IconLion className={classNameIcon} />
    </div>
  );
}

function BadgeChairman({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 text-sky-600 dark:bg-slate-600 dark:text-sky-400` +
        " " +
        className
      }
    >
      <IconLion className={classNameIcon} />
    </div>
  );
}

function BadgeOsis({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 dark:bg-slate-600` +
        " " +
        className
      }
    >
      <IconSchool className={classNameIcon} />
    </div>
  );
}

function BadgeFlower({ classNameIcon, className }: propsIcon) {
  return (
    <div
      className={
        `inline-block overflow-hidden rounded-full bg-slate-300 p-1 dark:bg-slate-600` +
        " " +
        className
      }
    >
      <IconFlower className={classNameIcon} />
    </div>
  );
}

export {
  BadgeBendahara,
  BadgeChairman,
  BadgeDevTeam,
  BadgeEagle,
  BadgeFlower,
  BadgeOsis,
  BadgeSekretaris,
  BadgeViceChairman,
};
