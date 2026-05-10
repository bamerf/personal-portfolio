import { Header } from 'components/Header';
import { WorkSection } from 'components/WorkSection';
import { EducationSection } from 'components/EducationSection';
import { AboutSection } from 'components/AboutSection';

export default function Home() {
  return (
    <div className="pb-8 sm:pb-12">
      <Header />
      <WorkSection />
      <EducationSection />
      <AboutSection />
    </div>
  );
}
