import type { NextPage } from 'next';
import type { HeaderProps } from 'components/Header';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Header } from 'components/Header';
import { WorkCard } from 'components/atoms/WorkCard';
import { headerData, workData } from 'data';
import { EducationSection } from 'components/EducationSection';

const Home: NextPage = () => {
  return (
    <div className="pb-12">
      <Header {...headerData} />
      <div className="mb-24">
        <h2 className="mb-6 text-3xl font-semibold">Work</h2>
        <div className="flex flex-col gap-8">
          {workData.map((work: WorkCardProps, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
      <EducationSection />
    </div>
  );
};

export default Home;
