import type { NextPage } from 'next';
import type { HeaderProps } from 'components/Header';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Header } from 'components/Header';
import { WorkCard } from 'components/atoms/WorkCard';
import { EducationCard } from 'components/atoms/EducationCard';
import { headerData, workData } from 'data';

const Home: NextPage = () => {
  return (
    <div className="pb-12">
      <Header {...headerData} />
      <div className="mb-16">
        <h2 className="mb-8 text-3xl font-semibold">Work</h2>
        {workData.map((work: WorkCardProps, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
      <h2 className="font-seminbold mb-8 text-3xl">Education</h2>
      <EducationCard
        place="General Assembly"
        degree="Certificate in Software Engineering"
        date="2019"
        iconName="ga"
      />
      <EducationCard
        place="University of Syndey"
        degree="Master in Screen Arts"
        date="2015 - 2016"
        iconName="usyd"
      />
      <EducationCard
        place="Australian Film, Television and Radio School"
        degree="Graduate Diploma in Editing"
        date="2014"
        iconName="aftrs"
      />
      <EducationCard
        place="Sydney Film School"
        degree="Diploma in Screen and Media"
        date="2012 - 2013"
        iconName="sfs"
      />
    </div>
  );
};

export default Home;
