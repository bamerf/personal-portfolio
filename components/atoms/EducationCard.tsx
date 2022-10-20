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
  <div className="flex gap-3 rounded-md bg-neutral-800 p-6">
    <Icons name={iconName} size={32} />
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-bold text-neutral-200">{place}</h2>
      <h3 className="font-semibold text-neutral-300">{degree}</h3>
      <p className="text-neutral-600">{date}</p>
    </div>
  </div>
);
