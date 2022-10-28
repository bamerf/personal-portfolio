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
  <div className="group flex flex-col justify-between gap-4 rounded-md bg-neutral-800 p-6 transition-all duration-75 ease-linear hover:scale-101 hover:bg-neutral-700/40  md:flex-row">
    <div>
      <Icons className="mb-2" name={iconName} size={32} />
      <h1 className="text-xl font-bold text-neutral-200">{name}</h1>
      <h2 className="mb-1 font-semibold text-neutral-300">{title}</h2>
      <p className="text-sm text-neutral-600">{date}</p>
    </div>
    <div className="flex flex-col justify-between text-neutral-300 md:w-[300px]">
      <p className="mb-3 line-clamp-3 sm:line-clamp-none">{description}</p>
      <div className="flex flex-wrap gap-1 pb-6">
        {stack?.map((iconName, index) => (
          <Icons key={iconName + index} name={iconName} />
        ))}
      </div>
      <div className="flex items-center gap-1 text-neutral-600 group-hover:text-neutral-500">
        Read More
        <Icons
          name="arrowRight"
          className="stroke-neutral-600 group-hover:stroke-neutral-500"
          size={20}
        />
      </div>
    </div>
  </div>
);
