'use client';

import type { FC } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { Icons } from './Icons';
import type { EducationIconNames } from './Icons';

export type EducationCardProps = {
  place: string;
  degree: string;
  date?: string;
  iconName: EducationIconNames;
  className?: string;
};

export const EducationCard: FC<EducationCardProps> = ({
  place,
  degree,
  date,
  iconName,
  className,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={clsx(
        'flex flex-col gap-3 rounded-md border border-neutral-300 bg-neutral-200 p-6 dark:border-neutral-800 dark:bg-neutral-900 sm:flex-row',
        className
      )}
    >
      <Icons className="shrink-0 self-start" name={iconName} size={32} theme={theme} />
      <div className="flex flex-col gap-2 sm:gap-1">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          {place}
        </h2>
        <h3 className="font-mono font-semibold text-neutral-700 dark:text-neutral-300">
          {degree}
        </h3>
        {date && <p className="font-mono text-neutral-500 dark:text-neutral-600">{date}</p>}
      </div>
    </div>
  );
};
