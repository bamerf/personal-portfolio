import type { EducationCardProps } from 'components/atoms/EducationCard';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import type { HeaderProps } from 'components/Header';

export const headerData: HeaderProps = {
  name: 'Bamdad Erfanian',
  title: {
    text: 'Senior Frontend Engineer at',
    company: 'Corellium',
  },
  description:
    'I architect, build and design user interfaces that work for everyone. I love balancing the needs of the business with the needs of the user to create a delightful experience.',
  image: {
    src: '/images/profile.jpg',
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

export const workData: WorkCardProps[] = [
  {
    name: 'Corellium',
    title: 'Senior Frontend Engineer',
    date: 'Nov 2021 - Present',
    iconName: 'corellium',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: [
      'typescript',
      'react',
      'redux',
      'nextjs',
      'tailwind',
      'vercel',
      'jenkins',
    ],
  },
  {
    iconName: 'pay',
    name: 'Pay.com.au',
    title: 'Full Stack Developer',
    date: 'Nov 2020 - Nov 2021',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: ['typescript', 'react', 'nodejs', 'apollo', 'mongodb'],
  },
  {
    iconName: 'leadchat',
    name: 'Leadchat',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: [
      'react',
      'nodejs',
      'postgres',
      'circleci',
      'docker',
      'aws',
      'azure',
    ],
  },
  {
    name: 'PoweredLocal',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    iconName: 'corellium',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: ['react', 'nodejs', 'postgres', 'circleci', 'docker', 'aws'],
  },
];

export const educationData: EducationCardProps[] = [
  {
    place: 'General Assembly',
    degree: 'Certificate in Software Engineering',
    date: '2019',
    iconName: 'ga',
  },
  {
    place: 'University of Syndey',
    degree: 'Master in Screen Arts',
    date: '2015 - 2016',
    iconName: 'usyd',
  },
  {
    place: 'Australian Film, Television and Radio School',
    degree: 'Graduate Diploma in Editing',
    date: '2014',
    iconName: 'aftrs',
  },
  {
    place: 'Sydney Film School',
    degree: 'Diploma in Screen and Media',
    date: '2012 - 2013',
    iconName: 'sfs',
  },
];