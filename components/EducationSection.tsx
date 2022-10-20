import clsx from 'clsx';
import type { FC } from 'react';
import { EducationCard } from 'components/atoms/EducationCard';
import type { EducationCardProps } from 'components/atoms/EducationCard';
import { educationData } from 'data';

type EducationSectionProps = {
  className?: string;
};

export const EducationSection: FC<EducationSectionProps> = ({ className }) => {
  return (
    <div className={clsx('mb-8', className)}>
      <h2 className="mb-6 text-3xl font-semibold">Education</h2>
      <div className="flex flex-col gap-8">
        {educationData.map((education: EducationCardProps, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};
