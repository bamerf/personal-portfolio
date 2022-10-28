import type { NextPage } from 'next';
import Link from 'next/link';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Header } from 'components/Header';
import { WorkCard } from 'components/atoms/WorkCard';
import { headerData, workData } from 'data';
import { EducationSection } from 'components/EducationSection';

const Home: NextPage = () => {
  return (
    <div className="pb-8 sm:pb-12">
      <Header {...headerData} />
      <div className="mb-24">
        <h2 id="work" className="mb-6 text-3xl font-semibold">
          Work
        </h2>
        <div className="flex flex-col gap-8">
          {workData.map((work: WorkCardProps, index) => (
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
      <EducationSection />
    </div>
  );
};

export default Home;
