import type { HeaderProps } from 'components/Header';
import { location } from '../data/constants';

export const headerData: HeaderProps = {
  name: 'Bamdad Erfanian',
  title: {
    text: 'Senior Software Engineer at',
    company: 'Cellebrite',
  },
  description:
    'I architect, build, and design user interfaces that work for everyone. I enjoy balancing business needs with user needs to create delightful experiences.',
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
