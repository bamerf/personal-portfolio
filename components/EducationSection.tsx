import clsx from 'clsx';
import type { FC } from 'react';
import { useState } from 'react';
import { EducationCard } from 'components/atoms/EducationCard';
import type { EducationCardProps } from 'components/atoms/EducationCard';
import { educationData } from 'data';
import { Observer } from 'components/atoms/Observer';

type EducationSectionProps = {
  className?: string;
};

export const EducationSection: FC<EducationSectionProps> = ({ className }) => {
  const [inViewIndexes, setInViewIndexes] = useState<number[] | null>(null);

  return (
    <div className={clsx('mb-8', className)}>
      <h2 className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Education
      </h2>
      <div className="flex flex-col gap-8">
        {educationData.map((education: EducationCardProps, index) => (
          <Observer
            key={index}
            onChange={(inview) => {
              if (inview) {
                if (inViewIndexes?.includes(index)) {
                  return;
                }

                setInViewIndexes((prev) => {
                  if (prev === null) {
                    return [index];
                  }

                  return [...prev, index];
                });
              }

              if (!inview) {
                setInViewIndexes((prev) => {
                  if (prev === null) {
                    return null;
                  }

                  return prev.filter((item) => item !== index);
                });
              }
            }}
          >
            <EducationCard
              {...education}
              className={clsx('duration-400 transition-opacity', {
                'opacity-0': !inViewIndexes?.includes(index),
                'opacity-1': inViewIndexes?.includes(index),
                'blur-md': !inViewIndexes?.includes(index),
                'blur-none': inViewIndexes?.includes(index),
              })}
            />
          </Observer>
        ))}
      </div>
    </div>
  );
};
