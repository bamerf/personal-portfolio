import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Header } from 'components/Header';
import { EducationSection } from 'components/EducationSection';
import { WorkSection } from 'components/WorkSection';
import { location } from 'data/constants';

const Home: NextPage = () => {
  return (
    <div className="pb-8 sm:pb-12">
      <NextSeo
        title="Bamdad Erfanian"
        description={`Portfolio of Bamdad Erfanian, a software engineer based in ${location}.`}
      />
      <Header />
      <WorkSection />
      <EducationSection />
    </div>
  );
};

export default Home;
