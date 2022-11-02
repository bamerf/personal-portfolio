import type { NextPage } from 'next';
import { Header } from 'components/Header';
import { EducationSection } from 'components/EducationSection';
import { WorkSection } from 'components/WorkSection';

const Home: NextPage = () => {
  return (
    <div className="pb-8 sm:pb-12">
      <Header />
      <WorkSection />
      <EducationSection />
    </div>
  );
};

export default Home;
