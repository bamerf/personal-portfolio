import type { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { neutral } from 'tailwindcss/colors';

import type { ProjectsData } from 'data/projects';
import { Icons } from 'components/atoms/Icons';

import { delayMap } from './WorkCard';

export type EducationCardProps = ProjectsData & {
  className?: string;
  isInView?: boolean;
};

export const ProjectCard: FC<EducationCardProps> = ({
  name,
  description,
  href,
  stack,
  isInView,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        's flex flex-col gap-3 rounded-md bg-neutral-300 p-6 dark:bg-neutral-800',
        className
      )}
    >
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {name}
      </h2>
      <div className={clsx('flex flex-wrap gap-1 pb-6')}>
        {stack?.map((iconName, index) => (
          <Icons
            className={clsx('transition-all duration-500', delayMap[index], {
              'blur-sm': !isInView,
              'blur-0': isInView,
              'opacity-0': !isInView,
              'opacity-1': isInView,
              '-translate-x-full': !isInView,
              'translate-x-0': isInView,
            })}
            key={iconName + index}
            name={iconName}
            fill={theme === 'light' ? neutral[800] : neutral[900]}
          />
        ))}
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
      <Link href={href}>
        <a className="underline" target="_blank" referrerPolicy="no-referrer">
          {href}
        </a>
      </Link>
    </div>
  );
};
