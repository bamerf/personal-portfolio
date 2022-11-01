import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { neutral } from 'tailwindcss/colors';
import { Icons } from './Icons';
import type { WorkData } from 'data/work';

type WorkCardProps = WorkData;

export const WorkCard: FC<WorkCardProps> = ({
  name,
  title,
  date,
  iconName,
  description,
  stack,
}) => {
  const { theme } = useTheme();

  return (
    <div className="group flex flex-col justify-between gap-4 rounded-md bg-neutral-300 p-6 transition-all duration-75 ease-linear hover:scale-101 hover:bg-neutral-400/40 dark:bg-neutral-800 dark:hover:bg-neutral-700/40  md:flex-row">
      <div>
        <Icons className="mb-2" name={iconName} size={32} theme={theme} />
        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          {name}
        </h1>
        <h2 className="mb-1 font-semibold text-neutral-700 dark:text-neutral-300">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-600">{date}</p>
      </div>
      <div className="flex flex-col justify-between md:w-[300px]">
        <p className="mb-3 text-neutral-800 line-clamp-3 dark:text-neutral-300 sm:line-clamp-none">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 pb-6">
          {stack?.map((iconName, index) => (
            <Icons
              key={iconName + index}
              name={iconName}
              fill={theme === 'light' ? neutral[800] : neutral[900]}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 text-neutral-500 group-hover:text-neutral-600 dark:text-neutral-600 dark:group-hover:text-neutral-500">
          Read More
          <Icons
            name="arrowRight"
            className="stroke-neutral-500 group-hover:stroke-neutral-600 dark:stroke-neutral-600 dark:group-hover:stroke-neutral-500"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};
