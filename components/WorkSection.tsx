'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WorkCard } from 'components/atoms/WorkCard';
import type { WorkData } from 'data/work';
import { workData } from 'data/work';
import { Observer } from 'components/atoms/Observer';

export const WorkSection = () => {
  const [inViewIndexes, setInViewIndexes] = useState<number[] | null>(null);

  return (
    <div className="mb-24">
      <h2
        id="work"
        className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200"
      >
        Work
      </h2>
      <div className="flex flex-col gap-8">
        {workData.map((work: WorkData, index) => (
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
            <Link href={`/work/${work.iconName}`}>
              <WorkCard
                key={index}
                {...work}
                isInView={inViewIndexes?.includes(index)}
              />
            </Link>
          </Observer>
        ))}
      </div>
    </div>
  );
};
