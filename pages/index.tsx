import type { NextPage } from 'next';
import type { HeaderProps } from 'components/Header';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Header } from 'components/Header';
import { CareerSummary } from 'components/CareerSummary';
import { WorkSummary } from 'components/WorkSummary';
import { EducationSummary } from 'components/EducationSummary';
import { WorkCard } from 'components/atoms/WorkCard';

const headerProps: HeaderProps = {
  name: 'Bamdad Erfanian',
  title: {
    text: 'Senior Frontend Engineer at',
    company: 'Corellium',
  },
  description:
    'I architect, build and design user interfaces that work for everyone. I love balancing the needs of the business with the needs of the user to create a delightful experience.',
  image: {
    src: '/profile.jpg',
    alt: 'profile picture',
    width: 125,
    height: 125,
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bamdad-erfanian/',
      iconName: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bamerf/',
      iconName: 'github',
    },
  ],
  location: 'Grenoble, France',
};

const workProps: WorkCardProps = {
  name: 'Corellium',
  title: 'Senior Frontend Engineer',
  date: 'May 2021 - Present',
  iconName: 'corellium',
  description:
    'Memeber of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
  stack: ['typescript', 'react', 'nodejs', 'nextjs', 'jenkins', 'docker'],
};

const Home: NextPage = () => {
  return (
    <div className="pb-32">
      <Header {...headerProps} />
      <h1 className="mb-8 text-3xl font-semibold">Work</h1>
      <WorkCard {...workProps} />
      <WorkCard
        {...workProps}
        iconName="pay"
        name="Pay.com.au"
        title="Full Stack Developer"
        stack={['circleci', 'mongodb', 'apollo', 'azure', 'jenkins', 'docker']}
      />
      <WorkCard
        {...workProps}
        iconName="leadchat"
        name="Leadchat"
        title="Full Stack Developer"
        stack={['react', 'nodejs', 'docker', 'circleci', 'aws', 'postgres']}
      />
      <WorkCard
        {...workProps}
        iconName="backifi"
        name="Leadchat"
        title="Full Stack Developer"
        stack={['react', 'nodejs', 'docker', 'circleci', 'aws', 'postgres']}
      />
      <WorkSummary />
      <CareerSummary />
      <EducationSummary />
    </div>
  );
};

export default Home;
