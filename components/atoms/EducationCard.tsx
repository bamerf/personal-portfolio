import type { FC } from 'react';
import { Icons } from './Icons';
import type { EducationIconNames } from './Icons';

export type EducationCardProps = {
  place: string;
  degree: string;
  date: string;
  iconName: EducationIconNames;
};

export const EducationCard: FC<EducationCardProps> = ({
  place,
  degree,
  date,
  iconName,
}) => (
  <div className="flex flex-col gap-3 rounded-md bg-neutral-300 p-6 dark:bg-neutral-800 sm:flex-row">
    <Icons className="shrink-0" name={iconName} size={32} />
    <div className="flex flex-col gap-2 sm:gap-1">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {place}
      </h2>
      <h3 className="font-semibold text-neutral-700 dark:text-neutral-300">
        {degree}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-600">{date}</p>
    </div>
  </div>
);
