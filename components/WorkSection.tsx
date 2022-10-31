import Link from 'next/link';
import { WorkCard } from 'components/atoms/WorkCard';
import type { WorkData } from 'data/work';
import { workData } from 'data/work';

export const WorkSection = () => (
  <div className="mb-24">
    <h2
      id="work"
      className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200"
    >
      Work
    </h2>
    <div className="flex flex-col gap-8">
      {workData.map((work: WorkData, index) => (
        <Link
          className="cursor-pointer"
          href={`/work/${work.iconName}`}
          key={index}
        >
          <a>
            <WorkCard key={index} {...work} />
          </a>
        </Link>
      ))}
    </div>
  </div>
);
