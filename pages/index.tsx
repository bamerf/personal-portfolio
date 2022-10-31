import type { NextPage } from 'next';
import { Header } from 'components/Header';
import { headerData } from 'data';
import { EducationSection } from 'components/EducationSection';
import { WorkSection } from 'components/WorkSection';

const Home: NextPage = () => {
  return (
    <div className="pb-8 sm:pb-12">
      <Header {...headerData} />
      <WorkSection />
      <EducationSection />
    </div>
  );
};

export default Home;
