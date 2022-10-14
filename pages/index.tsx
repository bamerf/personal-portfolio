import type { NextPage } from 'next';
import type { HeaderProps } from 'components/Header';
import { Header } from 'components/Header';
import { CareerSummary } from 'components/CareerSummary';
import { WorkSummary } from 'components/WorkSummary';
import { EducationSummary } from 'components/EducationSummary';

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

const Home: NextPage = () => {
  return (
    <div className="pb-32">
      <Header {...headerProps} />
      <WorkSummary />
      <CareerSummary />
      <EducationSummary />
    </div>
  );
};

export default Home;
