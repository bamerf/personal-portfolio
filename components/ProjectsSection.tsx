import clsx from 'clsx';
import { useState, type FC } from 'react';
import { projectsData } from 'data';
import { ProjectCard } from 'components/atoms/ProjectCard';
import { Observer } from 'components/atoms/Observer';

type EducationSectionProps = {
  className?: string;
};

export const ProjectsSection: FC<EducationSectionProps> = ({ className }) => {
  const [inViewIndexes, setInViewIndexes] = useState<number[] | null>(null);

  return (
    <div className={clsx('mb-24', className)}>
      <h2 className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
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
            <ProjectCard
              key={index}
              isInView={inViewIndexes?.includes(index)}
              {...project}
            />
          </Observer>
        ))}
      </div>
    </div>
  );
};
