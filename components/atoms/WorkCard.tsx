import type { FC } from 'react';
import { Icons } from './Icons';
import type { IconNames, StackIconNames } from './Icons';

export type WorkCardProps = {
  name: string;
  title: string;
  description: string;
  iconName: IconNames;
  date: string;
  stack?: StackIconNames[];
};

export const WorkCard: FC<WorkCardProps> = ({
  name,
  title,
  date,
  iconName,
  description,
  stack,
}) => (
  <div className="flex justify-between rounded-md bg-neutral-800 p-6 transition-all duration-75 ease-linear hover:bg-neutral-700">
    <div>
      <Icons className="mb-2" name={iconName} size={32} />
      <h1 className="text-xl font-bold text-neutral-200">{name}</h1>
      <h2 className="mb-1 font-semibold text-neutral-300">{title}</h2>
      <p className="text-sm text-neutral-600">{date}</p>
    </div>
    <div className="flex w-[300px] flex-col justify-between text-neutral-300">
      <p className="pb-3">{description}</p>
      <div className="flex gap-1 pb-6">
        {stack?.map((iconName, index) => (
          <Icons key={iconName + index} name={iconName} />
        ))}
      </div>
      <a className="text-neutral-600" href="">
        {/* Read More <Icons name="arrow" /> */}
        Read More
      </a>
    </div>
  </div>
);
