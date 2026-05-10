import type { HeaderProps } from 'components/Header';
import { location } from '../data/constants';

export const headerData: HeaderProps = {
  name: 'Bamdad Erfanian',
  title: {
    text: 'Senior Software Engineer at',
    company: 'Cellebrite',
  },
  description:
    "I architect, design and build software that works for everyone and I'm obsessed with creating a healthy culture and setting up protocols to keep a team efficient.",
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bamerf/',
      iconName: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bamerf/',
      iconName: 'github',
    },
  ],
  location,
};
