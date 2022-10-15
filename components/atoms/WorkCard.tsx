import type { FC } from 'react';
import { Icons } from './Icons';
import type { IconNames } from './Icons';

export type WorkCardProps = {
  name: string;
  title: string;
  description: string;
  iconName: IconNames;
  date: string;
};

export const WorkCard: FC<WorkCardProps> = ({
  name,
  title,
  date,
  iconName,
  description,
}) => (
  <div className="mb-8 flex justify-between rounded-md bg-neutral-800 p-6">
    <div>
      <Icons className="mb-2" name={iconName} size={28} />
      <h1 className="text-xl font-bold text-neutral-200">{name}</h1>
      <h2 className="mb-1 font-semibold text-neutral-300">{title}</h2>
      <p className="text-sm text-neutral-600">{date}</p>
    </div>
    <div className="flex w-[300px] flex-col justify-between gap-4 text-neutral-300">
      <p>{description}</p>
      <a className="text-neutral-600" href="">
        {/* Read More <Icons name="arrow" /> */}
        Read More
      </a>
    </div>
  </div>
);
